import { TerminalInterface } from "cli/manager/terminalInterface";
import { CommandRegistrar } from "commands/command-registrar";
import * as vscode from 'vscode';
export class RemotesResetCommand extends CommandRegistrar {
    protected async execute(...args: any[]): Promise<void> {
        TerminalInterface.remotesReset();
    }

    constructor(context: vscode.ExtensionContext, register: boolean) {
        super(context, register, 'premake5.remotes-reset', "reset the remotes to default");
    }
}