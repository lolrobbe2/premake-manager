import { CommandGroup } from "commands/command-group";
import * as vscode from 'vscode';
import { ModuleAddCommand } from "./module-add";
import { moduleInfoCommand } from "./module-info";
import { ModuleInstallCommand } from "./module-install";
import { ModuleRemoveCommand } from "./module-remove";

export class ModuleCommandGroup extends CommandGroup {
    constructor(context: vscode.ExtensionContext, register: boolean) {
        super(context, register,"premake5.module-group", "module commands | all the available module commands");
        this.addMultiple([
            ModuleAddCommand,
            moduleInfoCommand,
            ModuleInstallCommand,
            ModuleRemoveCommand
        ]);
    }
}