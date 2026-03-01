import { TerminalInterface } from "cli/manager/terminalInterface";
import { CommandRegistrar } from "commands/command-registrar";
import * as vscode from 'vscode';
export class RemotesViewCommand extends CommandRegistrar {
    protected async execute(...args: any[]): Promise<void> {
        TerminalInterface.remotesView();
    }

    constructor(context: vscode.ExtensionContext, register: boolean) {
        super(context, register, 'premake5.remotes-view', "view all the local remotes");
    }
}