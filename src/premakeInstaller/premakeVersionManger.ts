import AdmZip from 'adm-zip';
import axios from 'axios';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import * as tar from 'tar';
import * as vscode from 'vscode';
import { GithubUtils, Release, ReleaseAsset } from '../utils/githubUtils.js';
import { VSCodeUtils } from '../utils/utils.js';
import { Terminal } from 'terminal/terminal.js';
export class PremakeVersionManager {

    // Get the Premake version from the workspace settings
    public static getVersion(): string {
        const premakeVersion = vscode.workspace.getConfiguration().get<string>('premake.version', 'not set');
        return premakeVersion;
    }

    public static isVersionSet(): boolean {
        return this.getVersion() !== '';
    }
    
    // Optionally, you can set the version through the API if needed
    public static async setVersion(version: string): Promise<void> {
        const config = vscode.workspace.getConfiguration();
        await Terminal.setVersion(version);
        await config.update('premake.version', version, vscode.ConfigurationTarget.Workspace);
    }

    public static async showVersionPicker(): Promise<string | undefined> {
        const availableVersions : string[] = await this.getAvailableVersionNames();
        const selectedVersion = await vscode.window.showQuickPick(availableVersions, {
            placeHolder: 'Select a Premake version',
            canPickMany: false // Allow only one version selection
        });

        await this.setVersion(selectedVersion!);
        return selectedVersion;
    }
    private static async getAvailableVersionNames() : Promise<string[]> {
        try {
            const releases = await GithubUtils.getReleases();
            const availableVersions = releases.map((release: any) => release.name);
            availableVersions.unshift('latest');
            return availableVersions;
            // You can now use availableVersions as needed
        } catch (error) {
            console.error('Error populating available versions:', error);
            return [];
        }
    }
    public static async getVersionRelease(version: string): Promise<Release | undefined> {
        const releases : Release[] =  await GithubUtils.getReleases();

        if(version === 'latest'){
            version = releases[0].name!;
        }

        const release = releases.find((release: any) => release.name === version);
        if (release) {
            return release;
        } else {
            console.error(`Release with version ${version} not found.`);
            return undefined;
        }
    }

    public static async isVersionReleaseInstalled(version: string): Promise<boolean> 
    {
        const currentRelease: Release | undefined = await this.getVersionRelease(await this.getVersion());
        if(currentRelease === undefined) { return false; }
        const platformReleases = this.getCurrentAssetForPlatform(currentRelease);
        return this.premakeVersionExistsInDirectory(currentRelease.name!);
    }

    public static getCurrentPlatform() : string {
        const platform = os.platform();

        if (platform === 'win32') {
            return 'windows';
        } else if (platform === 'darwin') {
            return 'macosx';
        } else if (platform === 'linux') {
            return 'linux';
        } else {
            return 'Unknown';
        }
    }

    public static getExecutableExtension(): string {
        const platform = os.platform();

        switch (platform) {
            case 'win32':
                return '.exe';
            case 'darwin':
            case 'linux':
                return ''; // Unix-based systems typically don't use extensions for executables
            default:
                throw new Error(`Unsupported platform: ${platform}`);
        }
    }

    public static getCurrentAssetForPlatform(release:Release) : ReleaseAsset | undefined {
        const platform = this.getCurrentPlatform();
        for (const asset of release.assets) 
        {
            if(asset.name.includes(platform)) { return asset; }
        }
    }
    public static premakeVersionExistsInDirectory(releaseName:string) : boolean {
        const workspace: string = VSCodeUtils.getWorkspaceFolder();
        const destinationPath:string = path.join(workspace,".premake",releaseName,this.getCurrentPlatform(),`premake5${this.getExecutableExtension()}`);
        return fs.existsSync(destinationPath);
    }

    public static async installPremakeVersionPlatform(releaseName: string, platformAsset: ReleaseAsset): Promise<void> {
        
        const workspace: string = VSCodeUtils.getWorkspaceFolder();
        const destinationPath: string = path.join(workspace, '.premake', releaseName, this.getCurrentPlatform(), `premake5${this.getExecutableExtension()}`);
        await fs.promises.mkdir(path.dirname(destinationPath), { recursive: true });

        const downloadUrl = platformAsset.download_link;

        await vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: `Installing Premake ${releaseName}`,
            cancellable: true,
        }, async (progress, token) => {
            try {
                const response = await axios.get(downloadUrl, {
                    responseType: 'stream',
                    onDownloadProgress: (progressEvent) => {
                        if (progressEvent.lengthComputable) {
                            const percentage = (progressEvent.loaded / progressEvent!.total!) * 100;
                            progress.report({ increment: 0, message: `Downloaded ${Math.round(percentage)}%` });
                        }
                    },
                });

                if (response.status !== 200) {
                    throw new Error(`Failed to download Premake: ${response.status} ${response.statusText}`);
                }

                const tmpDir = path.join(os.tmpdir(), 'premake-downloads');
                await fs.promises.mkdir(tmpDir, { recursive: true });
                const tmpFilePath = path.join(tmpDir, `premake-${Date.now()}${path.extname(downloadUrl)}`);
                const dest = fs.createWriteStream(tmpFilePath);

                token.onCancellationRequested(() => {
                    dest.destroy();
                    response.data.destroy(); // Important: Destroy the stream from axios
                    fs.promises.unlink(tmpFilePath).catch(() => {});
                    throw new Error('Installation cancelled.');
                });

                response.data.pipe(dest); // Use pipe for efficient streaming

                await new Promise<void>((resolve, reject) => {
                    dest.on('finish', resolve);
                    dest.on('error', reject);
                });

                dest.close();

                if (path.extname(downloadUrl).toLowerCase() === '.zip') {
                    try {
                        const zip = new AdmZip(tmpFilePath);
                        zip.extractAllTo(path.dirname(destinationPath), true);
                        console.log(`Extracted ${tmpFilePath} to ${path.dirname(destinationPath)}`);
                    } catch (unzipError: any) {
                        console.error("Error extracting zip:", unzipError);
                        throw new Error(`Failed to extract Premake archive: ${unzipError.message}`);
                    }
                } else if (path.extname(downloadUrl).toLowerCase() === '.gz' || path.extname(downloadUrl).toLowerCase() === '.tgz') {
                    try {
                        await tar.x({
                            file: tmpFilePath,
                            cwd: path.dirname(destinationPath),
                        });
                    } catch (tarError: any) {
                        console.error("Error extracting tar.gz:", tarError);
                        throw new Error(`Failed to extract Premake archive: ${tarError.message}`);
                    }
                } else {
                    await fs.promises.copyFile(tmpFilePath, destinationPath);
                }

                await fs.promises.unlink(tmpFilePath);
                if (os.platform() !== 'win32') 
                    { await fs.promises.chmod(destinationPath, '755'); }
                vscode.window.showInformationMessage(`Premake ${releaseName} installed successfully.`);

            } catch (error: any) {
                if (token.isCancellationRequested && error.message === 'Installation cancelled.') {
                    vscode.window.showWarningMessage('Installation cancelled.');
                } else {
                    vscode.window.showErrorMessage(`Failed to install Premake: ${error.message}`);
                }
            }
        });
        
    }
    public static async installPremakeVersion(releaseName: string): Promise<void> {
        const release = await this.getVersionRelease(releaseName);
        if(release !== undefined) {
            const releaseAsset: ReleaseAsset= await this.getCurrentAssetForPlatform(release)!;
            await this.installPremakeVersionPlatform(release.name ?? "latest", releaseAsset);
        }
    }
    public static async installPremakePicker() {
        await this.showVersionPicker();
        const version: string = await PremakeVersionManager.getVersion();
        if (!await this.isVersionReleaseInstalled(version)) {
            const installResult = await vscode.window.showInformationMessage(
                'Premake version is not installed for selected release. Do you want to install it?',
                'Yes', 'No'
            );
            if (installResult === 'Yes') {
                await this.installPremakeVersion(version);
            }
        }
    }
    public static async cleanPremakeFolder() :Promise<void> {
        const workspaceFolder = VSCodeUtils.getWorkspaceFolder();
        const premakeFolder = path.join(workspaceFolder, '.premake');

        if (!fs.existsSync(premakeFolder)) {return;}

        const folders = fs.readdirSync(premakeFolder).filter((file) =>
            fs.statSync(path.join(premakeFolder, file)).isDirectory()
        );

        // Get the current version to compare
        const currentVersion = this.getVersion();

        await vscode.window.withProgress(
            {
                location: vscode.ProgressLocation.Notification, // Show progress in the notification area
                title: "Cleaning .premake folder...",
                cancellable: false
            },
            async (progress) => {
                let folderCount = folders.length;
                let currentIndex = 0;

                // Iterate through each folder and clean up
                for (const folder of folders) {
                    const folderPath = path.join(premakeFolder, folder);

                    // Update progress message and percentage
                    currentIndex++;
                    progress.report({
                        increment: (currentIndex / folderCount) * 100, // Increment based on folder processing
                        message: `Removing folder: ${folder}`
                    });

                    // If the folder does not match the version, remove it
                    if (folder !== currentVersion) {
                        fs.rmSync(folderPath, { recursive: true, force: true });
                    }
                }
            }
        );
    }
}
