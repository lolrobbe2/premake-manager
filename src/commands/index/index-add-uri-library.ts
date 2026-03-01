import { TerminalInterface } from "cli/manager/terminalInterface";
import { CommandRegistrar } from "commands/command-registrar";
import { Prompt } from "utils/prompt-utils";
import * as vscode from 'vscode';
export class IndexAddUriLibraryCommand extends CommandRegistrar {
    protected async execute(...args: any[]): Promise<void> {
        const uri: String | undefined = await Prompt.Text("Pls enter the github link of the library");
        TerminalInterface.indexAddUriLibrary(uri);
    }

    constructor(context: vscode.ExtensionContext, register: boolean) {
        super(context, register, 'premake5.index-add-uri-library', "Add a library from a github uri to the local index");
    }
}