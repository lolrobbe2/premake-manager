import * as vscode from 'vscode';
import { option } from "../premake5/option";

export class OptionItem extends vscode.TreeItem {
    constructor(public readonly option: option) {
        super(option.trigger, vscode.TreeItemCollapsibleState.None);
        this.tooltip = `Trigger: ${option.trigger} \r\n Description: ${option.description}`;
        this.description = option.description;
    }
}
