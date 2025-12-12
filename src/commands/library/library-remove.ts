import { TerminalInterface } from "cli/manager/terminalInterface";
import { CommandRegistrar } from "commands/command-registrar";
import { Prompt } from "utils/prompt-utils";
import * as vscode from 'vscode';

/**
 * This command removes 
 */
export class LibraryRemoveCommand extends CommandRegistrar {
    protected async execute(...args: any[]): Promise<void> {
        const githubLink: String | undefined = await Prompt.Text("Pls enter the github link of the library","https://github.com/lolrobbe2/premake-config");
        if(githubLink !== undefined && githubLink !== "")
            TerminalInterface.libraryRemove(this.addPrefix(githubLink));
        else
            TerminalInterface.libraryRemove("");
    }

    constructor(context: vscode.ExtensionContext, register: boolean) {
        super(context, register, 'premake5.library-remove',"remove library | remove a premake library");
    }

    private addPrefix(githubLink: String) : String{
        if (githubLink.startsWith("https://github.com/"))
            return githubLink;
        else
            return `https://github.com/${githubLink}`;
    }
}