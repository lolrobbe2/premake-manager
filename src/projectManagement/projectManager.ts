import * as vscode from 'vscode';
import { ProjectParser } from "./parser/projectParser";
import { workspaceFile } from "./parser/workspaceFile";
import { premakeWorkspace } from './premake5/workspace';
import { WorkspacesProvider } from "./views/workspacesProvider";
export class projectManager {
    static workspaceProvider: WorkspacesProvider = new WorkspacesProvider(); 
    static premakeFile: workspaceFile | undefined;
    static get premakeFileLoaded(): boolean {return this.premakeFile !== undefined;}
    static currentWorkspace: string | undefined = undefined;
    static loadWorkspace(workspace: string): void {
        this.premakeFile = ProjectParser.resolveWorkspaceFile(workspace);
        this.workspaceProvider.setWorkspaceFile(this.premakeFile);
        this.currentWorkspace = workspace;
    }

    static refresh(){
        this.workspaceProvider.refresh();
    }
    static async reload(): Promise<void> {
        if (this.currentWorkspace === undefined) {
            this.workspaceProvider.refresh();
            return;
        }
        const fileUri = vscode.Uri.file(this.currentWorkspace);
        const fileStat = await vscode.workspace.fs.stat(fileUri);
        if(fileStat === undefined) {
            this.currentWorkspace = undefined;
            this.workspaceProvider.refresh()
            return;
        }
        ProjectParser.reset();
        this.premakeFile = ProjectParser.resolveWorkspaceFile(this.currentWorkspace!);
        this.workspaceProvider.setWorkspaceFile(this.premakeFile);
        this.workspaceProvider.refresh()
    }
    static get workspaces(): string[] {
        return this.premakeFile?.workspaces.map((workspace) => workspace.name) ?? [];
    }
    static getWorkspace(name:string): premakeWorkspace | undefined {
        return this.premakeFile?.workspaces.find((workspace) => workspace.name === name);
    }
}