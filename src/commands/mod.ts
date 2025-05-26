import * as vscode from 'vscode';
import { moduleInfoCommand } from './module/module-info';
import { TerminalCommand } from './terminal-command';
import { versionListInstalledCommand, versionListReleasesCommand } from './version/version-list';
import { versionSetCommand } from './version/version-set';

export function register(context: vscode.ExtensionContext): void {
    new TerminalCommand(context);
    new versionSetCommand(context);
    new versionListInstalledCommand(context);
    new versionListReleasesCommand(context);
    new moduleInfoCommand(context);
    
}

