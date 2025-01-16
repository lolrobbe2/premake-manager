import * as vscode from 'vscode';
import { ActionItem } from './actionItem'; // Adjust the import path as necessary
import { action } from 'projectManagement/premake5/action';

export class ActionsItem extends vscode.TreeItem {
    constructor(public readonly actions: action[]) {
        super("Actions", vscode.TreeItemCollapsibleState.Collapsed);
        this.tooltip = "Actions";
        this.iconPath = new vscode.ThemeIcon('lightbulb');
    }

    getChildren(): vscode.TreeItem[] {
        return this.actions.map(action => new ActionItem(action));
    }
}
