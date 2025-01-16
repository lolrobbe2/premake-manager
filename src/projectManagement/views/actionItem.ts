import * as vscode from 'vscode';
import { action } from '../premake5/action';
export class ActionItem extends vscode.TreeItem {
    constructor(public readonly action: action) {
        super(action.trigger, vscode.TreeItemCollapsibleState.None);
        this.tooltip = `Trigger: ${action.trigger}\r\n Description: ${action.description}`;
        this.description = action.description;
        this.command = {
            title: `run ${action.trigger} action`,
            command: `premake.action.run`,
            arguments: [action.trigger]
        };
    }
}
