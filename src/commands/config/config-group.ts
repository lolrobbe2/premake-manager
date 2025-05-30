import { CommandGroup } from "commands/command-group";
import * as vscode from 'vscode';
import { configSetVersionCommand } from "./config-set-version";
import { configViewCommand } from "./config-view";


export class ConfigCommandGroup extends CommandGroup {
    constructor(context: vscode.ExtensionContext, register: boolean) {
        super(context, register,"premake5.config-group", "config commands | all the available configuration commands");
        this.addMultiple([
            configViewCommand,
            configSetVersionCommand
        ]);
    }
}