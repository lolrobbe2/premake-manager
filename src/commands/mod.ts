import * as vscode from 'vscode';
import { EnvironmentAwareTerminal, TerminalCommand } from './terminal-command';
import { versionSetCommand } from './version/version-set';

export function register(context: vscode.ExtensionContext): void {
    new TerminalCommand(context);
    new versionSetCommand(context);
    new EnvironmentAwareTerminal(context);
}
