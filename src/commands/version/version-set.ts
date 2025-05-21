import { TerminalInterface } from "cli/terminalInterface";
import { CommandRegistrar } from "commands/command-registrar";
import { Prompt } from "utils/prompt-utils";
import * as vscode from 'vscode';

export class versionSetCommand extends CommandRegistrar {
    protected async execute(...args: any[]): Promise<void> {
        const tag: String | undefined = await Prompt.Text("Pls add your version tag (leave empty for selection)","v5.0.0-beta6");
        TerminalInterface.setVersion(tag);
    }

    constructor(context: vscode.ExtensionContext) {
        super(context,'premake5.version-set');
    }
}