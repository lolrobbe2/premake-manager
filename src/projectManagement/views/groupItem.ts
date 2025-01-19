import * as vscode from 'vscode';

export class GroupItem extends vscode.TreeItem {
    children: vscode.TreeItem[] = [];

    constructor(label: string, public collapsibleState: vscode.TreeItemCollapsibleState) {
        super(label, collapsibleState);
        this.tooltip = `Group: ${label}`;
        this.updateIconPath();
    }

    getChildren(): vscode.TreeItem[] {
        return this.children;
    }

    addChild(child: vscode.TreeItem) {
        this.children.push(child);
    }

    updateIconPath() {
        if (this.collapsibleState === vscode.TreeItemCollapsibleState.Collapsed) {
            this.iconPath = new vscode.ThemeIcon("folder");
        } else {
            this.iconPath = new vscode.ThemeIcon("folder-active");
        }
    }
}
