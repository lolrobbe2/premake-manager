import { TerminalInterface } from "cli/manager/terminalInterface";
import { CommandRegistrar } from "commands/command-registrar";
import * as vscode from 'vscode';
export class configSetVersionCommand extends CommandRegistrar {
    protected async execute(...args: any[]): Promise<void> {
        TerminalInterface.configView();
    }

    constructor(context: vscode.ExtensionContext, register: boolean) {
        super(context, register, 'premake5.config-set-version', "set the premake version | set the premake version in premakeConfig.yml");
    }
}