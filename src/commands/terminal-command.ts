import { PremakeCliTerminal } from 'cli/terminal';
import * as vscode from 'vscode';
import { CommandRegistrar } from "./command-registrar";

export class TerminalCommand extends CommandRegistrar {
    protected execute(...args: any[]): void {
        const terminal: PremakeCliTerminal = new PremakeCliTerminal(this.context);
        terminal.openTerminal(true);
    }
    constructor(context: vscode.ExtensionContext) {
        super(context,'premake5.manager-cli')
    }
}