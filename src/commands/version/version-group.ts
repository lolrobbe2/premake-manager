import { CommandGroup } from "commands/command-group";
import * as vscode from 'vscode';
import { versionListInstalledCommand, versionListReleasesCommand } from './version-list';

export class VersionCommandGroup extends CommandGroup {
    constructor(context: vscode.ExtensionContext, register: boolean) {
        super(context, register,"premake5.version-group", "version commands");
        this.addMultiple([
            versionListInstalledCommand,
            versionListReleasesCommand
        ]);
    }
}