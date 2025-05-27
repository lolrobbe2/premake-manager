import { TerminalInterface } from "cli/manager/terminalInterface";
import { CommandRegistrar } from "commands/command-registrar";
import * as vscode from 'vscode';
export class versionListReleasesCommand extends CommandRegistrar {
    protected async execute(...args: any[]): Promise<void> {
        TerminalInterface.listReleases();
    }

    constructor(context: vscode.ExtensionContext) {
        super(context,'premake5.version-list-releases', "list premake releases");
    }
}

export class versionListInstalledCommand extends CommandRegistrar {
    protected async execute(...args: any[]): Promise<void> {
        TerminalInterface.listInstalled();
    }

    constructor(context: vscode.ExtensionContext) {
        super(context, 'premake5.version-list-installed',"list installed versions");
    }
}