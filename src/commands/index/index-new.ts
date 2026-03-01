import { TerminalInterface } from "cli/manager/terminalInterface";
import { CommandRegistrar } from "commands/command-registrar";
import { Prompt } from "utils/prompt-utils";
import * as vscode from 'vscode';
export class IndexNewCommand extends CommandRegistrar {
    protected async execute(...args: any[]): Promise<void> {
        const uri: String | undefined = await Prompt.Text("Pls enter the github repository link for the remote");
        TerminalInterface.indexNew(uri);
    }

    constructor(context: vscode.ExtensionContext, register: boolean) {
        super(context, register, 'premake5.index-new', "create a new common index");
    }
}