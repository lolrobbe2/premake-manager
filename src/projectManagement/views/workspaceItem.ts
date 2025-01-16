import { premakeWorkspace } from 'projectManagement/premake5/workspace';
import * as vscode from 'vscode';
import { ProjectItem } from './projectItem'; // Adjust the import path as necessary

export class WorkspaceItem extends vscode.TreeItem {
    static visibleProperties: string[] = [
        'kind',
        'location',
        'cppdialect',
        'cdialect',
        'csversion',
    ];
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

        const propertyItems = this.workspace.properties.map(property => {
            if (WorkspaceItem.visibleProperties.includes(property.key)) {
                const item = new vscode.TreeItem(`${property.key.replace(/"/g, '')}: ${property.value.replace(/"/g, '')}`, vscode.TreeItemCollapsibleState.None);
                item.tooltip = `${property.key.replace(/"/g, '')}: ${property.value.replace(/"/g, '')}`;
                return item;
            }
            return null;
        }).filter(item => item !== null) as vscode.TreeItem[];

        return [...projectItems, ...dependencyItems, ...propertyItems];
    }
}
