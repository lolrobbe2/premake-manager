import * as vscode from "vscode";

export interface PremakeManagerTaskDefinition extends vscode.TaskDefinition {
    type: 'premakeManager';
    command: string;
}

export class PremakeManagerTask extends vscode.Task {
    constructor(
        definition: PremakeManagerTaskDefinition,
        scope: vscode.TaskScope.Global | vscode.TaskScope.Workspace | vscode.WorkspaceFolder | undefined,
        name: string,
        execution: vscode.ShellExecution | undefined
    ) {
        
        super(
            definition,
            scope!,
            "premakeManager",
            "premake5", // The source name shown in UI
            execution
        );
        this.detail = name;
        this.group = vscode.TaskGroup.Build;

    }
}