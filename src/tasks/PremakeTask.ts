import * as vscode from "vscode";
export interface PremakeTaskDefinition extends vscode.TaskDefinition {
    type: 'premake5';
    action: 'codelite' | 'compilecommands' | 'gmake' | 'ninja' | 'vs2026' | 'vs2022' | 'vs2019' | 'vs2017' | 'vs2015' | 'vs2013' | 'vs2012' | 'vs2010' | 'vs2010' | 'vs2008' | 'vs2005' | 'xcode4' | string;
    file?: string;
    options?: string[];
}
export class PremakeTask extends vscode.Task {
    constructor(
        definition: PremakeTaskDefinition,
        scope: vscode.TaskScope.Global | vscode.TaskScope.Workspace | vscode.WorkspaceFolder | undefined,
        name: string,
        execution: vscode.ShellExecution | undefined
    ) {
        
        super(
            definition,
            scope!,
            "premake5",
            "premake5", // The source name shown in UI
            execution,
            "premake manager"
        );
        this.detail = name;
        this.group = vscode.TaskGroup.Build;

    }
}