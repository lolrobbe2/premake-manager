import { CommandGroup } from "commands/command-group";
import * as vscode from 'vscode';
import { ConfigCommandGroup } from "./config/config-group";
import { IndexCommandGroup } from "./index/index-group";
import { LibraryCommandGroup } from "./library/library-group";
import { ModuleCommandGroup } from "./module/module-group";
import { VersionCommandGroup } from "./version/version-group";
import { RemotesCommandGroup } from "./remotes/remotes-group";

export class ManagerCommandGroup extends CommandGroup {
    constructor(context: vscode.ExtensionContext, register: boolean) {
        super(context, register,"premake5.manager", "all commands | all the available command groups");
        this.addMultiple([
            VersionCommandGroup,
            ModuleCommandGroup,
            LibraryCommandGroup,
            ConfigCommandGroup,
            IndexCommandGroup,
            RemotesCommandGroup
        ]);
    }
}