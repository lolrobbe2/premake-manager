import { TerminalInterface } from "cli/manager/terminalInterface";
import { CommandRegistrar } from "commands/command-registrar";
import { Prompt } from "utils/prompt-utils";
import * as vscode from 'vscode';
export class ModuleAddCommand extends CommandRegistrar {
    protected async execute(...args: any[]): Promise<void> {
        const githubLink: String | undefined = await Prompt.Text("Pls enter the github link of the module","https://github.com/lolrobbe2/premake-config");
        if (githubLink !== undefined)    
            TerminalInterface.moduleAdd(this.addPrefix(githubLink));
    }

    constructor(context: vscode.ExtensionContext, register: boolean) {
        super(context, register,'premake5.module-add',"add module");
    }

    private addPrefix(githubLink: String): String {
        if (githubLink.startsWith("https://github.com/"))
            return githubLink;
        else
            return `https://github.com/${githubLink}`;
    }
}
