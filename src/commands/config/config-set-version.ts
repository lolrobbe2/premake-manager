import { TerminalInterface } from "cli/manager/terminalInterface";
import { CommandRegistrar } from "commands/command-registrar";
import { Prompt } from "utils/prompt-utils";
import * as vscode from 'vscode';
export class configSetVersionCommand extends CommandRegistrar {
    protected async execute(...args: any[]): Promise<void> {
        const versionTag: String | undefined = await Prompt.Text("Pls add your version tag (leave empty for selection)", "v5.0.0-beta6");
        TerminalInterface.configSetVersion(versionTag);
    }

    constructor(context: vscode.ExtensionContext, register: boolean) {
        super(context, register, 'premake5.config-set-version', "set the premake version | set the premake version in premakeConfig.yml");
    }
}