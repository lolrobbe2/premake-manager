import { CommandGroup } from "commands/command-group";
import * as vscode from 'vscode';
import { ConfigCommandGroup } from "./config/config-group";
import { ModuleCommandGroup } from "./module/module-group";
import { VersionCommandGroup } from "./version/version-group";

export class ManagerCommandGroup extends CommandGroup {
    constructor(context: vscode.ExtensionContext, register: boolean) {
        super(context, register,"premake5.manager", "all commands | all the available command groups");
        this.addMultiple([
            VersionCommandGroup,
            ModuleCommandGroup,
            ConfigCommandGroup
        ]);
    }
}