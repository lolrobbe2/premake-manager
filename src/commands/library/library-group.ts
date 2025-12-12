import { CommandGroup } from "commands/command-group";
import * as vscode from 'vscode';
import { LibraryAddCommand } from "./library-add";
import { LibraryInfoCommand } from "./library-info";
import { LibraryInstallCommand } from "./library-install";
import { LibraryRemoveCommand } from "./library-remove";

export class LibraryCommandGroup extends CommandGroup {
    constructor(context: vscode.ExtensionContext, register: boolean) {
        super(context, register,"premake5.library-group", "library commands | all the available library commands");
        this.addMultiple([
            LibraryAddCommand,
            LibraryInfoCommand,
            LibraryInstallCommand,
            LibraryRemoveCommand
        ]);
    }
}