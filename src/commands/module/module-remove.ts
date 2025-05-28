import { TerminalInterface } from "cli/manager/terminalInterface";
import { CommandRegistrar } from "commands/command-registrar";
import { Prompt } from "utils/prompt-utils";
import * as vscode from 'vscode';

/**
 * This command removes 
 */
export class ModuleRemoveCommand extends CommandRegistrar {
    protected async execute(...args: any[]): Promise<void> {
        const githubLink: String | undefined = await Prompt.Text("Pls enter the github link of the module","https://github.com/lolrobbe2/premake-config");
        TerminalInterface.moduleRemove(githubLink);
    }

    constructor(context: vscode.ExtensionContext, register: boolean) {
        super(context, register, 'premake5.module-remove',"remove module | remove a premake module");
    }
}