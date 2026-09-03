import { WorkspaceUtils } from "utils/workspace-utils";
import * as vscode from "vscode";


export class PremakeConfigurationProvider implements vscode.DebugConfigurationProvider {
    provideDebugConfigurations?(folder: vscode.WorkspaceFolder | undefined, token?: vscode.CancellationToken): vscode.ProviderResult<vscode.DebugConfiguration[]>{
        if(folder === undefined) {
            return [];
        }
        const workspaceManager = WorkspaceUtils.workspaces.get(folder);

        for(const workspace of workspaceManager?.GetPremakeWorkspaces() ?? [])
        {
            const projects = workspaceManager?.GetPremakeProjectsFromWorkspace(workspace) ?? [];
            for (const project of projects) {
                const configName = `[${workspace.name}] ${project.name}`;
            }
        }

        return [];
    }


}