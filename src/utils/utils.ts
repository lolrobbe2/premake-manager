import { Terminal } from 'terminal/terminal';
import * as vscode from 'vscode';

export class VSCodeUtils {
    static context: vscode.ExtensionContext | undefined = undefined;
    // Static method to get the first workspace folder's path
    public static getWorkspaceFolder(): string {
        const workspaceFolder = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;

        if (!workspaceFolder) {
            return "";
        }

        return workspaceFolder;
    }
    public static autoLoadWorkspaceEnabled(): boolean {
        const autoLoad = vscode.workspace.getConfiguration('premake.workspace').get<boolean>('autoload', true); 
        return autoLoad;
    }
    public static setExtensionContext(context:vscode.ExtensionContext) {
        this.context = context;
    }
    public static getPremakeTerminal(): vscode.Terminal{
        const terminal: vscode.Terminal | undefined = vscode.window.terminals.find((terminal) => terminal.name === "premake5");
        if(terminal !== undefined) {
            return terminal;
        }
        return vscode.window.createTerminal({
            name: 'premake5',
            pty: new Terminal("",false),
            iconPath: vscode.Uri.file(this.context!.asAbsolutePath("resources/media/premake-logo.png"))
        })
    }
}

export class Prompt {
    /**
     * Prompt the user with a Yes or No prompt
     * @param prompt to show the user
     * @return boolean
     * - True on success
     * - False when declined
     * - False on timeout
     */
    static async Pass(prompt : string) : Promise<boolean> {
        return await vscode.window.showInformationMessage(prompt,'Yes', 'No') == 'Yes';
    }

    /**
     * Shows an information message to the user.
     * @param message to show the user
     */
    static async Info(message :string) {
        vscode.window.showInformationMessage(message);
    }
    
    /**
     * Shows a warning message to the user.
     * @param warning to show the user
     */
    static async Warning(warning : string) {
        vscode.window.showWarningMessage(warning);
    }

    /**
     * Shows a error to the user.
     * @param error to show the user
     */
    static async Error(error : string) {
        console.error(error);
        vscode.window.showErrorMessage(error);
    }

    /**
     * Shows a quikPicker to the user where a Single option can be selected
     * @param options to selct from see vscode.QuickPickItem for more info
     * @param placeHolder for the quickPicker
     * @returns vscode.QuickPickItem that was selected
     */
    static async Select(options:vscode.QuickPickItem[], placeHolder: string | undefined = undefined) : Promise<vscode.QuickPickItem | undefined>{
        return vscode.window.showQuickPick(options, { placeHolder: placeHolder, canPickMany: false});
    }

    /**
     * Shows a quikPicker to the user where Multiple options can be selected.
     * @param options to selct from see vscode.QuickPickItem for more info
     * @param placeHolder for the quickPicker
     * @returns vscode.QuickPickItem that was selected
     */
    static async SelectMany(options:vscode.QuickPickItem[], placeHolder: string | undefined = undefined) : Promise<vscode.QuickPickItem[] | undefined>{
        return vscode.window.showQuickPick(options, { placeHolder: placeHolder, canPickMany: true});
    }

    static async Text(prompt:string, placeHolder: string = "Enter your text here...") : Promise<String | undefined>{
        return await vscode.window.showInputBox({
            prompt:prompt,
            placeHolder:placeHolder,
        });
    }
}
