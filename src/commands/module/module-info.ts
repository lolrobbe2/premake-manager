import { TerminalInterface } from "cli/manager/terminalInterface";
import { CommandRegistrar } from "commands/command-registrar";
import { Prompt } from "utils/prompt-utils";
import * as vscode from 'vscode';
export class moduleInfoCommand extends CommandRegistrar {
    protected async execute(...args: any[]): Promise<void> {
        const githubLink: String | undefined = await Prompt.Text("Pls enter the github link of the module","https://github.com/lolrobbe2/premake-config");
        TerminalInterface.moduleInfo(githubLink);
    }

    constructor(context: vscode.ExtensionContext) {
        super(context,'premake5.module-info', "get module info");
    }
}
