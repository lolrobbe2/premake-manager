import { CommandGroup } from "commands/command-group";
import * as vscode from 'vscode';
import { IndexAddCommandGroup } from "./index-add-group";
import { IndexNewCommand } from "./index-new";



export class IndexCommandGroup extends CommandGroup {
    constructor(context: vscode.ExtensionContext, register: boolean) {
        super(context, register,"premake5.index-group", "index commands | all the available common index commands");
        this.addMultiple([
            IndexNewCommand,
            IndexAddCommandGroup
        ]);
    }
}