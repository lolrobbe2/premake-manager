import { WorkspaceUtils } from "utils/workspace-utils";
import * as vscode from "vscode";


export class PremakeConfigurationProvider implements vscode.DebugConfigurationProvider {
    provideDebugConfigurations?(folder: vscode.WorkspaceFolder | undefined, token?: vscode.CancellationToken): vscode.ProviderResult<vscode.DebugConfiguration[]>{
        if(folder === undefined) {
            return [];
        }
        const workspaceManager = WorkspaceUtils.workspaces.get(folder);

        let debugConfigurations : vscode.DebugConfiguration[] = [];
        for(const workspace of workspaceManager?.GetPremakeWorkspaces() ?? [])
        {
            const projects = workspaceManager?.GetPremakeProjectsFromWorkspace(workspace) ?? [];
            for (const project of projects) {
                const configName = `[${workspace.name}] ${project.name}`;
                debugConfigurations.push({
                    name: configName,
                    type: workspace.debugger.toLowerCase(),
                    request: "launch",
                    program: "${workspaceFolder}/bin/" + project.name, // Adjust build path as needed
                    cwd: "${workspaceFolder}",
                    // Grouping metadata in VS Code
                    presentation: {
                        group: workspace.name, // Visually groups items under this label in the dropdown
                        order: projects.indexOf(project)
                    }
                });
            }
        }

        return [];
    }


}