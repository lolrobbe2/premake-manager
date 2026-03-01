import { CommandGroup } from "commands/command-group";
import * as vscode from 'vscode';
import { IndexAddLibraryCommand } from "./index-add-library";
import { IndexAddUriLibraryCommand } from "./index-add-uri-library";
import { IndexAddDependencyCommand } from "./index-add-dependency";
import { IndexEditCommand } from "./index-edit";



export class IndexAddCommandGroup extends CommandGroup {
    constructor(context: vscode.ExtensionContext, register: boolean) {
        super(context, register,"premake5.index-add-group", "index add commands | all the available common index add commands");
        this.addMultiple([
            IndexAddLibraryCommand,
            IndexAddUriLibraryCommand,
            IndexAddDependencyCommand,
            IndexEditCommand,
        ]);
    }
}