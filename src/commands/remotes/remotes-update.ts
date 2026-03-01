import { TerminalInterface } from "cli/manager/terminalInterface";
import { CommandRegistrar } from "commands/command-registrar";
import { Prompt } from "utils/prompt-utils";
import * as vscode from 'vscode';
export class RemotesUpdateCommand extends CommandRegistrar {
    protected async execute(...args: any[]): Promise<void> {
        const force: Boolean | undefined = await Prompt.Pass("Force update all the remotes");
        TerminalInterface.remotesUpdate(force);
    }

    constructor(context: vscode.ExtensionContext, register: boolean) {
        super(context, register, 'premake5.remotes-update', "update all the remotes");
    }
}