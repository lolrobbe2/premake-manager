import { ManagerCliTerminal } from "cli/manager/terminal";
import { GithubUtils } from "utils/github-utils";
import { EnvironmentRefresher } from "utils/vscode-utils";
import * as vscode from "vscode";
import { PremakeManagerTask, PremakeManagerTaskDefinition } from "./PremakeManagerTask";
import { PremakeTask, PremakeTaskDefinition } from "./PremakeTask";


export class PremakeTaskProvider implements vscode.TaskProvider {
    private tasks: vscode.Task[] = [];
    private readonly actions: string[] = [
        'compilecommands', 'gmake', 'ninja', 'vs2026', 'vs2022', 'vs2019',
        'vs2017', 'vs2015', 'vs2013', 'vs2012', 'vs2010', 'vs2008',
        'vs2005', 'xcode4'
    ];
    public async provideTasks(token: vscode.CancellationToken): Promise<vscode.Task[]> {
        const tasks: vscode.Task[] = [];
        const premakeFiles: vscode.Uri[] = await vscode.workspace.findFiles(
            "**/premake5.lua",
        );
        for (const premakeFile of premakeFiles) {
            if (token.isCancellationRequested) {
                return [];
            }

            for (const action of this.actions) {
                tasks.push(this.createPremakeTask(action, premakeFile.fsPath));
            }
        }
        return tasks;
    }
    public async resolveTask(task: vscode.Task, token: vscode.CancellationToken): Promise<vscode.Task | undefined> {
        const definition = task.definition as PremakeTaskDefinition;
        if (definition.type === "premake5") {
            await EnvironmentRefresher.refreshWindowsPath();
            const cleanEnv: { [key: string]: string } = {};

            Object.keys(process.env).forEach(key => {
                const value = process.env[key];
                if (value !== undefined) {
                    cleanEnv[key] = value;
                }
            });
            const definition = task.definition as PremakeTaskDefinition;
            const isWindows = process.platform === "win32";

            const shellPath = isWindows ? "cmd.exe" : "bash";
            const options: vscode.ShellExecutionOptions = {
                executable: shellPath,
                shellArgs: isWindows ? ['/d', '/c'] : ['-l', '-c'],
                env: cleanEnv
            };
            const args: string[] = [definition.action];

            if (definition.file) {
                args.push(`--file=${definition.file}`);
            }

            if (definition.options) {
                args.push(...definition.options);
            }
            const execution = new vscode.ShellExecution(`premake5 ${args.reduce((arg) => ` ${arg}`)}`,options);


            return new PremakeTask(definition,task.scope,task.name,execution);
        }
        return undefined;
    }
    constructor(private context: vscode.ExtensionContext) {
        this.actions.forEach(action => {
            this.tasks.push(this.createPremakeTask(action));
        });
    }
    //#region  Task Defenitions
    private createPremakeTask(action: string, file: string | undefined = undefined): vscode.Task {
        const definition: PremakeTaskDefinition = {
            type: "premake5",
            action: action,
            file: file
        };

        // Capitalize the first letter for the UI name (e.g., "Generate Ninja Projects")
        const friendlyName = action.charAt(0).toUpperCase() + action.slice(1);

        return new PremakeTask(
            definition,
            vscode.TaskScope.Workspace,
            `Generate ${friendlyName} Projects`,
            undefined
        );
    }
    //#endregion
}

export class PremakeManagerTaskProvider implements vscode.TaskProvider {
    constructor(private context: vscode.ExtensionContext){
        
    }
    
    public async provideTasks(token: vscode.CancellationToken): Promise<vscode.Task[]> {
        const tasks: vscode.Task[] = [];
        tasks.push(this.createPremakeManagerTask("empty task"));
        return tasks
    }

    public async resolveTask(task: vscode.Task, token: vscode.CancellationToken): Promise<vscode.Task | undefined> {
        const definition = task.definition as PremakeManagerTaskDefinition;

        if (definition.type === "premakeManager") {
            await EnvironmentRefresher.refreshWindowsPath();
            const cleanEnv: { [key: string]: string } = {};

            Object.keys(process.env).forEach(key => {
                const value = process.env[key];
                if (value !== undefined) {
                    cleanEnv[key] = value;
                }
            });
            
            const definition = task.definition as PremakeManagerTaskDefinition;
            const isWindows = process.platform === "win32";

            const shellPath = isWindows ? "cmd.exe" : "bash";

            if(GithubUtils.session)
                cleanEnv["GITHUB_TOKEN"] = GithubUtils.session!.accessToken;

            const options: vscode.ShellExecutionOptions = {
                executable: shellPath,
                shellArgs: isWindows ? ['/d', '/c'] : ['-l', '-c'],
                env: cleanEnv
            };

            const cliExecutable = ManagerCliTerminal.getCliExecutablePath(this.context);

            const execution = new vscode.ShellExecution(`${cliExecutable} ${definition.command}`, options);
            return new PremakeManagerTask(definition, task.scope, task.name, execution);

        }
        return undefined;
    }

    private createPremakeManagerTask(command: string) {
        const definition: PremakeManagerTaskDefinition = {
            type: "premakeManager",
            command: command
        };

        return new PremakeManagerTask(definition, vscode.TaskScope.Workspace, "Run premakeManager commands", undefined);
    }
}
