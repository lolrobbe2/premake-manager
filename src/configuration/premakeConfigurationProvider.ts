import { WorkspaceUtils } from "utils/workspace-utils";
import * as vscode from "vscode";

const exeExtension = process.platform === "win32" ? ".exe" : "";
export class PremakeConfigurationProvider
  implements vscode.DebugConfigurationProvider
{
  provideDebugConfigurations?(
    folder: vscode.WorkspaceFolder | undefined,
    token?: vscode.CancellationToken,
  ): vscode.ProviderResult<vscode.DebugConfiguration[]> {
    if (folder === undefined) {
      return [];
    }
    const workspaceManager = WorkspaceUtils.workspaces.get(folder);
    let debugConfigurations: vscode.DebugConfiguration[] = [];
    for (const workspace of workspaceManager?.GetPremakeWorkspaces() ?? []) {
      const projects =
        workspaceManager?.GetPremakeProjectsFromWorkspace(workspace) ?? [];
      for (const project of projects) {
        for (const configType of workspace.configurations) {
          const configName = `[${workspace.name}][${configType}] ${project.name}`;
          debugConfigurations.push({
            name: configName,
            type: (workspace.debugger ?? "cppdbg").toLowerCase(),
            request: "launch",
            program: project.targetdir[configType] + '/' + project.name + exeExtension, // Adjust build path as needed
            cwd: "${workspaceFolder}",
            // Grouping metadata in VS Code
            presentation: {
              group: workspace.name, // Visually groups items under this label in the dropdown
              order: projects.indexOf(project),
            },
          });
        }
      }
    }

    return debugConfigurations;
  }
  resolveDebugConfiguration?(
    folder: vscode.WorkspaceFolder | undefined,
    debugConfiguration: vscode.DebugConfiguration,
    token?: vscode.CancellationToken,
  ): vscode.ProviderResult<vscode.DebugConfiguration> {
    return debugConfiguration;
  }
  resolveDebugConfigurationWithSubstitutedVariables?(
    folder: vscode.WorkspaceFolder | undefined,
    debugConfiguration: vscode.DebugConfiguration,
    token?: vscode.CancellationToken,
  ): vscode.ProviderResult<vscode.DebugConfiguration> {
    return debugConfiguration;
  }
}
