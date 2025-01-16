import { action } from 'projectManagement/premake5/action';
import { PremakeRunner } from 'utils/premakeRunner';
import { VSCodeUtils } from 'utils/utils';
import * as vscode from 'vscode';
import { ActionItem } from './actionItem'; // Adjust the import path as necessary
export class ActionsItem extends vscode.TreeItem {
    constructor(public readonly actions: action[]) {
        super("Actions", vscode.TreeItemCollapsibleState.Collapsed);
        this.tooltip = "Actions";
        this.iconPath = new vscode.ThemeIcon('lightbulb');
    }

    getChildren(): vscode.TreeItem[] {
        const defaultAction:string = PremakeRunner.getCurrentAction();
        const actions: ActionItem[] = this.actions.map(action => new ActionItem(action));
        if(defaultAction !== '') { actions.push(new ActionItem(new action(defaultAction,"the default action",this.getIcon(defaultAction)))); }
        return actions;
    }

    getIcon(action: string): vscode.IconPath | undefined{
        if(action.startsWith('')) {
            vscode.Uri.file(VSCodeUtils.context!.asAbsolutePath("resources/media/gnusocial-simple-svgrepo-com.svg"));
        } else if(action.startsWith('vs')) {
            return new vscode.ThemeIcon("vscode");
        } else {
            return new vscode.ThemeIcon("question");
        }
    }
}
