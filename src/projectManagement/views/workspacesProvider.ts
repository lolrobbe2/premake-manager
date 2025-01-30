import { workspaceFile } from 'projectManagement/parser/workspaceFile';
import { premakeWorkspace } from 'projectManagement/premake5/workspace';
import * as vscode from 'vscode';
import { ActionsItem } from './actionsItem'; // Adjust the import path as necessary
import { GroupItem } from './groupItem';
import { OptionsItem } from './optionsItem'; // Adjust the import path as necessary
import { ProjectItem } from './projectItem'; // Adjust the import path as necessary
import { WorkspaceItem } from './workspaceItem'; // Adjust the import path as necessary

export class WorkspacesProvider implements vscode.TreeDataProvider<vscode.TreeItem> {
    private _onDidChangeTreeData: vscode.EventEmitter<vscode.TreeItem | undefined | void> = new vscode.EventEmitter<vscode.TreeItem | undefined | void>();
    readonly onDidChangeTreeData: vscode.Event<vscode.TreeItem | undefined | void> = this._onDidChangeTreeData.event;

    private workspaces: premakeWorkspace[] = [];
    private rootPremakeFile: workspaceFile | undefined;

    constructor() {}

    setWorkspaceFile(workspaceFile: workspaceFile): void {
        this.rootPremakeFile = workspaceFile;
        this.workspaces = workspaceFile.workspaces;
        this.refresh();
    }

    refresh(): void {
        this._onDidChangeTreeData.fire();
    }

    getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
        return element;
    }

    getChildren(element?: vscode.TreeItem): Thenable<vscode.TreeItem[]> {
        if (element instanceof WorkspaceItem) {
            return Promise.resolve((element as WorkspaceItem).getChildren());
        } else if (element instanceof ProjectItem) {
            return Promise.resolve((element as ProjectItem).getChildren());
        } else if (element instanceof OptionsItem) {
            return Promise.resolve(element.getChildren());
        } else if (element instanceof ActionsItem) {
            return Promise.resolve(element.getChildren());
        } else if(element instanceof GroupItem){
            const groupItem = element as GroupItem;
            groupItem.collapsibleState = vscode.TreeItemCollapsibleState.Expanded;
            groupItem.updateIconPath();
            return Promise.resolve(groupItem.getChildren());
        } else if (!element) {
            const rootChildren = this.workspaces.map(workspace => new WorkspaceItem(workspace));
            const optionsItem = this.rootPremakeFile ? new OptionsItem(this.rootPremakeFile.options) : null;
            const actionsItem = this.rootPremakeFile ? new ActionsItem(this.rootPremakeFile.actions) : null;
            return Promise.resolve([...(optionsItem ? [optionsItem] : []), ...(actionsItem ? [actionsItem] : []), ...rootChildren]);
        }
        return Promise.resolve([]);
    }
}
