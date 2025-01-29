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
        });
    }
}
