import * as vscode from 'vscode';
import { option } from 'projectManagement/premake5/premakeFile'; // Adjust the import path as necessary

export class OptionItem extends vscode.TreeItem {
    constructor(public readonly option: option) {
        super(option.trigger, vscode.TreeItemCollapsibleState.None);
        this.tooltip = `Trigger: ${option.trigger}, Description: ${option.description}`;
        this.description = option.description;
    }
}
