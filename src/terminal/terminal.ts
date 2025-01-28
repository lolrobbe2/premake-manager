import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { PremakeVersionManager } from 'premakeInstaller/premakeVersionManger';
import { VSCodeUtils } from 'utils/utils';
import { PremakeRunner } from 'utils/premakeRunner';

export class Terminal {
    public static async init() {
        const version:string = PremakeVersionManager.getVersion();
        if(version != ""){ await this.setVersion(version); }
        vscode.tasks.onDidStartTask((task) => {task.execution.task});
            
        
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
            const batchFilePath = path.join(premakeFolderPath, 'premake5.sh');

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
            //const batchContent = Terminal.getWindowsShell(version, destinationPath);
            const batchContent = Terminal.getUnixShell(version,destinationPath);
            // Write the batch script to the file
            fs.writeFileSync(batchFilePath, batchContent);

            this.setTerminalShell(batchFilePath);

            vscode.window.showInformationMessage(`Batch script premake5.bat created in ${premakeFolderPath}`);
        } catch (error) {
            vscode.window.showErrorMessage(`Failed to create batch script: ${error}`);
        }
    }
    private static getWindowsShell(version:string, destinationPath: string): string {
        return `
    @echo off
    setlocal
     
    :interactive
    set /p input="premake5 "
    goto process
    
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
        goto interactive
    )
    if "%input%"=="version" (
        echo ${version}
        goto interactive
    )
    
    if "%input%"=="action" (
        echo default action: ${PremakeRunner.getCurrentAction()}
        goto interactive
    )
    
    REM Pipe other input to premake5 and exit after running the command
    "${destinationPath}" %input%
    goto end
    
    :end
    endlocal
    `;
    }

    private static getUnixShell(version: string, destinationPath: string):string {
        return `
interactive() {
    while true; do
        read -p "premake5 " input

        if [ "$input" == "exit" ]; then
            echo "Exiting..."
            break
        fi

        case $input in
            "version")
                echo "${version}"
                ;;
            "action")
                echo "default action: ${PremakeRunner.getCurrentAction()}"
                ;;
            *)
                "${destinationPath.replaceAll("\\","/")}" $input
                ;;
        esac
    done
    }

interactive
        `;
    }
    public static async setTerminalShell(shellPath: string) {
        try {
            const config = vscode.workspace.getConfiguration('terminal.integrated');
            const profiles = config.get<any>('profiles.windows') || {};
            vscode.TerminalProfile
            // Add or update the premake5 profile
            profiles['premake5'] = {
                command: "sh",
                args: [shellPath],
                icon: 'settings-gear', // Use the settings-gear icon
                color: 'terminal.ansiGreen' // Set the color to terminal.ansiGreen
            };
    
            // Update the profiles in the workspace settings without setting the default profile
            await config.update('profiles.windows', profiles, vscode.ConfigurationTarget.Workspace);
        } catch (error) {
            vscode.window.showErrorMessage(`Failed to set terminal shell: ${error}`);
        }
    }
    public static async runTask(task:vscode.Task): Promise<vscode.Task | undefined>{
        if(task.definition.type !== "premake5") {return undefined}
        const workspaceFolder = VSCodeUtils.getWorkspaceFolder();
        const premakeFolder = path.join(workspaceFolder, '.premake');
        let premakeVersion = PremakeVersionManager.getVersion();
        if(premakeVersion === '')
        {
            vscode.window.showWarningMessage("premake version is not set, aborted task launch!")    ;
            return undefined;    
        }
        premakeVersion = PremakeVersionManager.getVersion();
        const folder = path.join(premakeFolder,premakeVersion,PremakeVersionManager.getCurrentPlatform());
        return new vscode.Task(task.definition,task.scope ?? vscode.TaskScope.Workspace,task.definition.action,'premake5', new vscode.ShellExecution(path.join(folder,'premake5'),[task.definition.action]));
        
    }
}

