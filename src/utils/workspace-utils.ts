import { WorkspaceManager } from "configuration/workspace/workspace-manager";
import * as vscode from "vscode";
export class WorkspaceUtils {
  public static readonly workspaces = new Map<vscode.WorkspaceFolder, WorkspaceManager>();

  private static _extensionContext : vscode.ExtensionContext;
  public static async Initialize(extensionContext: vscode.ExtensionContext) : Promise<void> {
    this._extensionContext = extensionContext;
    const disposable = vscode.workspace.onDidChangeWorkspaceFolders(this.OnWorkspaceFoldersChanged);
    for(const folder of  vscode.workspace.workspaceFolders ?? []) {
      await WorkspaceUtils.AddWorkspace(folder);
    }
  }
  private static async AddWorkspace(folder: vscode.WorkspaceFolder) {
    const workspace = new WorkspaceManager(this._extensionContext, folder);
    await workspace.RegisterSources();
    this.workspaces.set(folder, workspace);
  }

  private static OnWorkspaceFoldersChanged(event: vscode.WorkspaceFoldersChangeEvent) {
    WorkspaceUtils.RegisterWorkspaces(event.added);
    WorkspaceUtils.UnRegisterWorkspaces(event.removed);

  }
  private static RegisterWorkspaces(addedWorkspaces: readonly vscode.WorkspaceFolder[]){
    for (const folder of addedWorkspaces) {
      this.AddWorkspace(folder);
    }
  }
  private static UnRegisterWorkspaces(addedWorkspaces: readonly vscode.WorkspaceFolder[]) {
    for (const folder of addedWorkspaces) {
      this.workspaces.delete(folder);
    }
  }
}