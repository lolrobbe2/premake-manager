import * as vscode from 'vscode';
import { CommandGroup } from "commands/command-group";

export class VersionCommandGroup extends CommandGroup {
    constructor(context: vscode.ExtensionContext, register: boolean) {
        super(context, register,"premake.version-group", "version commands");
        this.add()
    }
}