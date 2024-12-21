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
        const availableVersions = [
            'Premake 5.0',
            'Premake 5.1',
            'Premake 5.2',
            'Premake 5.3'
        ];
        await GithubUtils.getReleases();
        const selectedVersion = await vscode.window.showQuickPick(availableVersions, {
            placeHolder: 'Select a Premake version',
            canPickMany: false // Allow only one version selection
        });
    }
}
