import { CommandGroup } from "commands/command-group";
import * as vscode from 'vscode';
import { RemotesAddCommand } from "./remotes-add";
import { RemotesRemoveCommand } from "./remotes-remove";
import { RemotesResetCommand } from "./remotes-reset";
import { RemotesUpdateCommand } from "./remotes-update";
import { RemotesViewCommand } from "./remotes-view";



export class RemotesCommandGroup extends CommandGroup {
    constructor(context: vscode.ExtensionContext, register: boolean) {
        super(context, register,"premake5.remotes-group", "remotes commands | all the available remotes commands");
        this.addMultiple([
            RemotesAddCommand,
            RemotesRemoveCommand,
            RemotesResetCommand,
            RemotesUpdateCommand,
            RemotesViewCommand
        ]);
    }
}