import { WorkspaceUtils } from "utils/workspace-utils";
import * as vscode from "vscode";
import * as path from "path";

const exeExtension = process.platform === "win32" ? ".exe" : "";
export class PremakeDynamicConfigurationProvider
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

          const targetDirectory = project.targetdir[configType];

          const executablePath = path.isAbsolute(targetDirectory)
            ? path.join(targetDirectory, project.name + exeExtension)
            : path.resolve(
                folder.uri.fsPath,
                targetDirectory,
                project.name + exeExtension,
              );

          const relativeExecutablePath = path
            .relative(folder.uri.fsPath, executablePath)
            .split(path.sep)
            .join("/");
            
          debugConfigurations.push({
            name: configName,
            type: (workspace.debugger ?? "cppdbg").toLowerCase(),
            request: "launch",
            program: "${workspaceFolder}/" + relativeExecutablePath, // Adjust build path as needed
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
export class PremakeInitialConfigurationProvider
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

          const targetDirectory = project.targetdir[configType];

          const executablePath = path.isAbsolute(targetDirectory)
            ? path.join(targetDirectory, project.name + exeExtension)
            : path.resolve(
                folder.uri.fsPath,
                targetDirectory,
                project.name + exeExtension,
              );

          const relativeExecutablePath = path
            .relative(folder.uri.fsPath, executablePath)
            .split(path.sep)
            .join("/");

          debugConfigurations.push({
            name: configName,
            type: (workspace.debugger ?? "cppdbg").toLowerCase(),
            request: "launch",
            program: "${workspaceFolder}/" + relativeExecutablePath, // Adjust build path as needed
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
}
