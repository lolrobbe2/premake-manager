import AdmZip from 'adm-zip';
import axios from 'axios';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import * as tar from 'tar';
import * as vscode from 'vscode';
import { GithubUtils, Release, ReleaseAsset } from '../utils/githubUtils.js';
import { VSCodeUtils } from '../utils/utils.js';
export class PremakeVersionManager {

    // Get the Premake version from the workspace settings
    public static getVersion(): string {
        const premakeVersion = vscode.workspace.getConfiguration().get<string>('premake.version', 'not set');
        return premakeVersion;
    }

    public static isVersionSet(): boolean {
        return this.getVersion() !== 'not set';
    }
    
    // Optionally, you can set the version through the API if needed
    public static setVersion(version: string): void {
        const config = vscode.workspace.getConfiguration();
        config.update('premake.version', version, vscode.ConfigurationTarget.Workspace)
            .then(() => {
                console.log(`Premake version set to: ${version}`);
            }, (error) => {
                console.error('Failed to update Premake version:', error);
            });
    }

    // A method to handle logic based on the version
    public static handleVersion(): void {
        const version = PremakeVersionManager.getVersion();
    }

    public static async showVersionPicker(): Promise<void> {
        const availableVersions : string[] = await this.getAvailableVersionNames();
        const selectedVersion = await vscode.window.showQuickPick(availableVersions, {
            placeHolder: 'Select a Premake version',
            canPickMany: false // Allow only one version selection
        });

        this.setVersion(selectedVersion!);
    }
    private static async getAvailableVersionNames() : Promise<string[]> {
        try {
            const releases = await GithubUtils.getReleases();
        return releases.map((release: any) => release.name);
            // You can now use availableVersions as needed
        } catch (error) {
            console.error('Error populating available versions:', error);
            return [];
        }
    }
    public static async getVersionRelease(version: string): Promise<any | null> {
        const releases : Release[] =  await GithubUtils.getReleases();
        const release = releases.find((release: any) => release.name === version);
        if (release) {
            return release;
        } else {
            console.error(`Release with version ${version} not found.`);
            return null;
        }
    }

    public static async isVersionReleaseInstalled(version: string): Promise<boolean> 
    {
        const currentRelease: Release = await this.getVersionRelease(await this.getVersion());
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
        const releaseAsset: ReleaseAsset = await this.getCurrentAssetForPlatform(release)!;
        await this.installPremakeVersionPlatform(releaseName,releaseAsset);
    }
}
