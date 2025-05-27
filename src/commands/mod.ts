import * as vscode from 'vscode';
import { moduleInfoCommand } from './module/module-info';
import { TerminalCommand } from './terminal-command';
import { versionListInstalledCommand, versionListReleasesCommand } from './version/version-list';
import { versionSetCommand } from './version/version-set';
import { CommandManager } from './command-manager';



export function register(): void {
    CommandManager.add(TerminalCommand);
    CommandManager.add(versionSetCommand);
    CommandManager.add(versionListInstalledCommand);
    CommandManager.add(versionListReleasesCommand);
    CommandManager.add(moduleInfoCommand); 
}

