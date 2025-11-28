import * as path from 'path';
import * as vscode from 'vscode';

export class PathUtils {
    /**
     * Returns the root path of the first workspace folder, if available.
     */
    public static getWorkspaceRoot(): string | undefined {
        const folders = vscode.workspace.workspaceFolders;
        if (folders && folders.length > 0) {
            return folders[0].uri.fsPath;
        }
        return undefined;
    }

    /**
     * @param context extension context
     */
    public static getExtensionResourceRoot(context: vscode.ExtensionContext): string | undefined {
        return path.join(context.extensionPath, 'resources');
    }

    public static getResource(context: vscode.ExtensionContext, subpaths: string[]): string | undefined {
        return path.join(this.getExtensionResourceRoot(context)!,...subpaths);
    }
}
