import { CommandRegistrar } from "commands/command-registrar";
import { EditorPanel } from "registry/EditorPanel";
import { RegistryManager } from "registry/RegistryManager";
import * as vscode from 'vscode';
export class IndexEditCommand extends CommandRegistrar {
    protected async execute(...args: any[]): Promise<void> {
        await RegistryManager.Open();
        EditorPanel.createOrShow(this.context);
    }

    constructor(context: vscode.ExtensionContext, register: boolean) {
        super(context, register, 'premake5.index-edit', "edit the workspace common registry");
    }
}