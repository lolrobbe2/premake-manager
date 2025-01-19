import * as vscode from 'vscode';
import { OptionItem } from './optionItem'; // Adjust the import path as necessary
import { option } from 'projectManagement/premake5/option';

export class OptionsItem extends vscode.TreeItem {
    constructor(public readonly options: option[]) {
        super("Options", vscode.TreeItemCollapsibleState.Collapsed);
        this.tooltip = "Options";
        this.iconPath = new vscode.ThemeIcon('settings');
    }

    getChildren(): vscode.TreeItem[] {
        return this.options.map(option => new OptionItem(option));
    }
}
