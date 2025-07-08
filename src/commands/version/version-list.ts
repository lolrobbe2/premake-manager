import { TerminalInterface } from "cli/manager/terminalInterface";
import { CommandRegistrar } from "commands/command-registrar";
import * as vscode from 'vscode';
export class versionListReleasesCommand extends CommandRegistrar {
    protected async execute(...args: any[]): Promise<void> {
        TerminalInterface.listReleases();
    }

    constructor(context: vscode.ExtensionContext,register: boolean,) {
        super(context,register,'premake5.version-list-releases', "list premake releases | list all the available premake releases on github");
    }
}

export class versionListInstalledCommand extends CommandRegistrar {
    protected async execute(...args: any[]): Promise<void> {
        TerminalInterface.listInstalled();
    }

    constructor(context: vscode.ExtensionContext, register: boolean,) {
        super(context, register, 'premake5.version-list-installed',"list installed versions | list all the installed premake versions");
    }
}