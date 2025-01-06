import * as vscode from 'vscode';

export class VSCodeUtils {

    // Static method to get the first workspace folder's path
    public static getWorkspaceFolder(): string {
        const workspaceFolder = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;

        if (!workspaceFolder) {
            vscode.window.showErrorMessage('No workspace folder is open!');
            return "";
        }

        return workspaceFolder;
    }
    
}
