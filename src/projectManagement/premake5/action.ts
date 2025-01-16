import * as vscode from 'vscode';

export class action {
    trigger: string;
    description: string;
    icon:vscode.IconPath | undefined;

    constructor(trigger: string, description: string, icon:vscode.IconPath | undefined = undefined) {
        this.trigger = trigger;
        this.description = description;
        this.icon = icon;
    }
}
