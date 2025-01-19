import { premakeWorkspace } from 'projectManagement/premake5/workspace';
import * as vscode from 'vscode';
import { ProjectItem } from './projectItem'; // Adjust the import path as necessary
import { GroupItem } from './groupItem'; // Adjust the import path as necessary

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

    private buildGroupTree(projects: ProjectItem[]): GroupItem {
        const root = new GroupItem("root", vscode.TreeItemCollapsibleState.Expanded);

        projects.forEach(project => {
            if (project.project.group === "") { // Add project directly to root if group is empty 
                root.addChild(new ProjectItem(project.project)); 
            } else {
                const groupPath = project.project.group.split('/');
                let currentNode = root;

                groupPath.forEach(group => {
                    let groupItem = currentNode.children.find(item => item.label === group) as GroupItem;
                    if (!groupItem) {
                        groupItem = new GroupItem(group, vscode.TreeItemCollapsibleState.Collapsed);
                        currentNode.addChild(groupItem);
                    }
                    currentNode = groupItem;
                });

                currentNode.addChild(new ProjectItem(project.project));
            }
        });

        return root;
    }

    private createGroupTreeItems(groupItem: GroupItem): vscode.TreeItem[] {
        return groupItem.getChildren();
    }

    getChildren(): vscode.TreeItem[] {
        const projectItems = this.workspace.projects.map(project => new ProjectItem(project));
        const rootGroupTree = this.buildGroupTree(projectItems);
        const groupedProjectItems = this.createGroupTreeItems(rootGroupTree);

        const dependencyItems = this.workspace.dependencies.map(dependency => {
            const item = new vscode.TreeItem(dependency, vscode.TreeItemCollapsibleState.None);
            item.tooltip = `Dependency: ${dependency}`;
            return item;
        });

        const propertyItems = this.workspace.properties.map(property => {
            if (WorkspaceItem.visibleProperties.includes(property.key)) {
                const item = new vscode.TreeItem(
                    `${property.key.replace(/"/g, '')}: ${(property.value as string).replace(/"/g, '')}`,
                    vscode.TreeItemCollapsibleState.None
                );
                item.tooltip = `${property.key.replace(/"/g, '')}: ${(property.value as string).replace(/"/g, '')}`;
                return item;
            }
            return null;
        }).filter(item => item !== null) as vscode.TreeItem[];

        return [...groupedProjectItems, ...propertyItems];
    }
}
