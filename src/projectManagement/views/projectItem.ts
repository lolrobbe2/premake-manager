import { project } from 'projectManagement/premake5/project';
import * as vscode from 'vscode';

export class ProjectItem extends vscode.TreeItem {
    constructor(public readonly project: project) {
        super(project.name, vscode.TreeItemCollapsibleState.None);
        this.tooltip = `Project: ${project.name}`;
    }
}
