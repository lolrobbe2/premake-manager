import { TerminalInterface } from "cli/manager/terminalInterface";
import { CommandRegistrar } from "commands/command-registrar";
import { Prompt } from "utils/prompt-utils";
import * as vscode from 'vscode';
export class IndexAddLibraryCommand extends CommandRegistrar {
    protected async execute(...args: any[]): Promise<void> {
        const owner: String | undefined = await Prompt.Text("Pls enter the owner of library");
        const repo: String | undefined = await Prompt.Text("Pls enter the name of library");
        const description: String | undefined = await Prompt.Text("Pls enter the description of the library");
        TerminalInterface.indexAddLibrary(owner,repo, description);
    }

    constructor(context: vscode.ExtensionContext, register: boolean) {
        super(context, register, 'premake5.index-add-library', "Add a library to the local index");
    }
}