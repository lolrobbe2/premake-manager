import { PremakeFile } from 'projectManagement/premake5/premakeFile'; // Adjust the import path as necessary
import { premakeWorkspace } from 'projectManagement/premake5/workspace';
import * as vscode from 'vscode';
import { OptionsItem } from './optionsItem'; // Adjust the import path as necessary
import { ProjectItem } from './projectItem'; // Adjust the import path as necessary
import { WorkspaceItem } from './workspaceItem'; // Adjust the import path as necessary

export class WorkspacesProvider implements vscode.TreeDataProvider<vscode.TreeItem> {
    private _onDidChangeTreeData: vscode.EventEmitter<vscode.TreeItem | undefined | void> = new vscode.EventEmitter<vscode.TreeItem | undefined | void>();
    readonly onDidChangeTreeData: vscode.Event<vscode.TreeItem | undefined | void> = this._onDidChangeTreeData.event;

    private workspaces: premakeWorkspace[] = [];
    private rootPremakeFile: PremakeFile | undefined;

    constructor() {}

    setPremakeFile(premakeFile: PremakeFile): void {
        this.rootPremakeFile = premakeFile;
        this.workspaces = premakeFile.workspaces;
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
        } else if (!element) {
            const rootChildren = this.workspaces.map(workspace => new WorkspaceItem(workspace));
            const optionsItem = this.rootPremakeFile ? new OptionsItem(this.rootPremakeFile.options) : null;
            return Promise.resolve(optionsItem ? [optionsItem, ...rootChildren] : rootChildren);
        }
        return Promise.resolve([]);
    }
}
