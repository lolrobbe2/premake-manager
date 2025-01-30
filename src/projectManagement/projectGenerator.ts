import * as path from 'path';
import { VSCodeUtils } from 'utils/utils';
import * as vscode from 'vscode';

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
        await vscode.window.showTextDocument(document);
    }
}