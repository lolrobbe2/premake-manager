import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import * as vscode from 'vscode';
import * as https from 'https';
import * as http from 'http';
import { GithubUtils, Release, ReleaseAsset } from '../utils/githubUtils.ts';
import { VSCodeUtils } from '../utils/utils.ts';
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

    public static async installPremakeVersion(releaseName:string, platformAsset:ReleaseAsset) : Promise<void>
    {
        const workspace: string = VSCodeUtils.getWorkspaceFolder();
        const destinationPath: string = path.join(workspace, '.premake', releaseName, this.getCurrentPlatform(), `premake5${this.getExecutableExtension()}`);

        // Ensure the destination directory exists
        await fs.promises.mkdir(path.dirname(destinationPath), { recursive: true });

        // Determine the appropriate download URL and file extension
        const downloadUrl = platformAsset.download_link;
        const fileExtension = path.extname(downloadUrl).toLowerCase();

        // Create a progress notification
        const progress = vscode.window.withProgress(
   
        );

        
    }
}
