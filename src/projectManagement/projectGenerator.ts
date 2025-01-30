import * as path from 'path';
import { VSCodeUtils } from 'utils/utils';
import * as vscode from 'vscode';
import { projectManager } from './projectManager';

export class projectGenerator {
    public static async generateWorkspace(): Promise<void>{
        const files = await vscode.workspace.findFiles('premake5.lua');
        let workspaceFile: vscode.Uri | undefined = undefined;

        if(files.length > 0){
            workspaceFile = files[0];
        } else {
            workspaceFile = vscode.Uri.file(path.join(VSCodeUtils.getWorkspaceFolder(), 'premake5.lua'));
            await vscode.workspace.fs.writeFile(workspaceFile, new Uint8Array()); 
        }
        const document = await vscode.workspace.openTextDocument(workspaceFile!);
        const editor = await vscode.window.showTextDocument(document);
        editor.insertSnippet(new vscode.SnippetString("workspace \"${1:name}\"\n   configurations { \"Debug\", \"Release\" }"))
        projectManager.loadWorkspace(workspaceFile.fsPath);
    }
    public static async generateProject() {
        const selection: vscode.QuickPickItem | undefined = await vscode.window.showQuickPick(this.getWorkspaceOptions());
    }
    private static getWorkspaceOptions(): vscode.QuickPickItem[]{
        return projectManager.workspaces.map(workspace =>  {return {label:workspace, iconPath: vscode.Uri.file(VSCodeUtils.context!.asAbsolutePath("resources/media/premake-logo.svg"))} as vscode.QuickPickItem})
    }
}