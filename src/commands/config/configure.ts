import { TerminalInterface } from "cli/manager/terminalInterface";
import { CommandRegistrar } from "commands/command-registrar";
import * as vscode from 'vscode';
export class configureCommand extends CommandRegistrar {
    protected async execute(...args: any[]): Promise<void> {
        TerminalInterface.configure();
    }

    constructor(context: vscode.ExtensionContext, register: boolean) {
        super(context, register, 'premake5.configure',"configure the workspace | configure the workspace using premakeConfig.yml");
    }
}