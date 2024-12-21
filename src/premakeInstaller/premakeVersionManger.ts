import * as vscode from 'vscode';
import { GithubUtils } from '../utils/githubUtils.ts';

export class PremakeVersionManager {

    // Get the Premake version from the workspace settings
    public static getVersion(): string {
        const premakeVersion = vscode.workspace.getConfiguration().get<string>('premake.version', 'not set');
        return premakeVersion;
    }

    public static isVersionSet(): boolean {
        return this.getVersion() === 'not set';
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
}
