import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { PremakeVersionManager } from 'premakeInstaller/premakeVersionManger';

export class Terminal {
    public static async init() {
        const version:string = PremakeVersionManager.getVersion();
        if(version != ""){ await this.setVersion(version); }
    }

    public static async setVersion(version: string) {
        try {
            const workspaceFolders = vscode.workspace.workspaceFolders;
            if (!workspaceFolders) {
                vscode.window.showErrorMessage('No workspace folder is open.');
                return;
            }

            const workspacePath = workspaceFolders[0].uri.fsPath;
            const premakeFolderPath = path.join(workspacePath, '.premake');
            const batchFilePath = path.join(premakeFolderPath, 'premake5.bat');

            // Ensure the .premake folder exists
            if (!fs.existsSync(premakeFolderPath)) {
                fs.mkdirSync(premakeFolderPath);
            }

            // Use the methods from PremakeVersionManager to set the destination path
            const destinationPath: string = path.join(
                workspacePath,
                '.premake',
                version,
                PremakeVersionManager.getCurrentPlatform(),
                `premake5${PremakeVersionManager.getExecutableExtension()}`
            );

            // Create the batch script content
            const batchContent = Terminal.getWindowsShell(version, destinationPath);

            // Write the batch script to the file
            fs.writeFileSync(batchFilePath, batchContent);

            this.setTerminalShell(batchFilePath);

            vscode.window.showInformationMessage(`Batch script premake5.bat created in ${premakeFolderPath}`);
        } catch (error) {
            vscode.window.showErrorMessage(`Failed to create batch script: ${error}`);
        }
    }
    private static getWindowsShell(version: string, destinationPath: string) {
        return `
@echo off
setlocal

:loop
set /p input="premake5 "

if "%input%"=="exit" (
    echo Exiting...
    goto end
)

REM Process other commands
if "%input%"=="update version" (
    set /p version="Enter new version: "
    echo Updating version to %version%
    echo version=%version% > version.txt
    echo Version updated.
    goto loop
)
if "%input%"=="version" (
    echo ${version}
    goto loop
)
REM Pipe other input to premake5
"${destinationPath}" %input%

goto loop

:end
endlocal
pause
`;
    }

    public static async setTerminalShell(shellPath: string) {
        try {
            const config = vscode.workspace.getConfiguration('terminal.integrated');
            const profiles = config.get<any>('profiles.windows') || {};

            // Add or update the premake5 profile
            profiles['premake5'] = {
                path: shellPath,
                args: []
            };

            // Update the profiles and default profile in the workspace settings
            await config.update('profiles.windows', profiles, vscode.ConfigurationTarget.Workspace);
            await config.update('defaultProfile.windows', 'premake5', vscode.ConfigurationTarget.Workspace);

            vscode.window.showInformationMessage(`Integrated terminal shell set to ${shellPath} in local settings.`);
        } catch (error) {
            vscode.window.showErrorMessage(`Failed to set terminal shell: ${error}`);
        }
    }
}

