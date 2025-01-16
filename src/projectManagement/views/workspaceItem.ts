import { premakeWorkspace } from 'projectManagement/premake5/workspace';
import * as vscode from 'vscode';
import { ProjectItem } from './projectItem'; // Adjust the import path as necessary

export class WorkspaceItem extends vscode.TreeItem {
    constructor(public readonly workspace: premakeWorkspace) {
        super(workspace.trimmedName, vscode.TreeItemCollapsibleState.Collapsed);
        this.tooltip = `Workspace: ${workspace.trimmedName}`;
    }

    getChildren(): vscode.TreeItem[] {
        const projectItems = this.workspace.projects.map(project => new ProjectItem(project));
        const dependencyItems = this.workspace.dependencies.map(dependency => {
            const item = new vscode.TreeItem(dependency, vscode.TreeItemCollapsibleState.None);
            item.tooltip = `Dependency: ${dependency}`;
            return item;
        });
        return [...projectItems, ...dependencyItems];
    }
}
