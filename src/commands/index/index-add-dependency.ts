import { TerminalInterface } from "cli/manager/terminalInterface";
import { CommandRegistrar } from "commands/command-registrar";
import { Prompt } from "utils/prompt-utils";
import * as vscode from 'vscode';
export class IndexAddDependencyCommand extends CommandRegistrar {
    protected async execute(...args: any[]): Promise<void> {
        const githublink: String | undefined = await Prompt.Text("Pls enter the GitHub link of the library or the owner/repo");
        const owner: String | undefined = await Prompt.Text("Pls enter the owner of library");
        const repo: String | undefined = await Prompt.Text("Pls enter the name of library");
        const range: String | undefined = await Prompt.Text("Pls enter the semver range of the library or @ to use the parent version");
        TerminalInterface.indexAddDependency(githublink, owner,repo, range);
    }

    constructor(context: vscode.ExtensionContext, register: boolean) {
        super(context, register, 'premake5.index-add-dependency', "Add a dependency to a local index library");
    }
}