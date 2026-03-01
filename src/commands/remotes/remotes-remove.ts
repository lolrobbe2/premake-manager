import { TerminalInterface } from "cli/manager/terminalInterface";
import { CommandRegistrar } from "commands/command-registrar";
import { Prompt } from "utils/prompt-utils";
import * as vscode from 'vscode';
export class RemotesRemoveCommand extends CommandRegistrar {
    protected async execute(...args: any[]): Promise<void> {
        const owner: String | undefined = await Prompt.Text("Pls enter the owner of the remote");
        const repo: String | undefined = await Prompt.Text("Pls enter the name of the remote");
        TerminalInterface.remotesRemove(owner,repo);
    }

    constructor(context: vscode.ExtensionContext, register: boolean) {
        super(context, register, 'premake5.remotes-remove', "remove a remote");
    }
}