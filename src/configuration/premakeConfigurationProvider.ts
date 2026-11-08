import { WorkspaceUtils } from "utils/workspace-utils";
import * as vscode from "vscode";
import * as path from "path";
import { BuildTools, detectBuildTools, DetectedTool } from "./tools/detected-tool";
import { Prompt } from "utils/prompt-utils";
import { getPremakeBuildTaskName } from "tasks/ActionProvider";

const exeExtension = process.platform === "win32" ? ".exe" : "";




type BuildToolName = keyof BuildTools;

async function selectBuildTool(): Promise<BuildToolName | undefined> {
  const tools = await detectBuildTools();

  const availableTools = (
    Object.entries(tools) as [BuildToolName, DetectedTool | undefined][]
  ).filter(
    (entry): entry is [BuildToolName, DetectedTool] =>
      entry[1] !== undefined,
  );

  if (availableTools.length === 0) {
    await Prompt.Warning("No supported build tools were detected.");
    return undefined;
  }

  const selected = await Prompt.Select(
    availableTools.map(([name, tool]) => ({
      label: name,
      description: tool.version,
      detail: tool.command,
    })),
    "Select a build toolchain",
  );

  return selected?.label as BuildToolName | undefined;
}

async function generateDebugConfigurations(
  folder: vscode.WorkspaceFolder | undefined,
  token?: vscode.CancellationToken,
): Promise<vscode.DebugConfiguration[]> {
  if (folder === undefined) {
    return [];
  }

  const toolName = await selectBuildTool();

  // User cancelled the picker.
  if (toolName === undefined || token?.isCancellationRequested) {
    return [];
  }

  const workspaceManager = WorkspaceUtils.workspaces.get(folder);
  const debugConfigurations: vscode.DebugConfiguration[] = [];

  for (const workspace of workspaceManager?.GetPremakeWorkspaces() ?? []) {
    const projects =
      workspaceManager?.GetPremakeProjectsFromWorkspace(workspace) ?? [];

    for (const project of projects) {
      for (const configType of workspace.configurations) {
        if (token?.isCancellationRequested) {
          return debugConfigurations;
        }

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

        const taskName = getPremakeBuildTaskName(
          workspace.name,
          project.name,
          configType,
          toolName,
        );

        debugConfigurations.push({
          name: `${configName} (${toolName})`,
          type: (workspace.debugger ?? "cppdbg").toLowerCase(),
          request: "launch",
          program: "${workspaceFolder}/" + relativeExecutablePath,
          cwd: "${workspaceFolder}",

          // Run the matching build task before debugging.
          preLaunchTask: `Premake5: ${taskName}`,

          presentation: {
            group: workspace.name,
            order: projects.indexOf(project),
          },
        });
      }
    }
  }

  return debugConfigurations;
}
export class PremakeDynamicConfigurationProvider
  implements vscode.DebugConfigurationProvider
{
  provideDebugConfigurations(
    folder: vscode.WorkspaceFolder | undefined,
    token?: vscode.CancellationToken,
  ): vscode.ProviderResult<vscode.DebugConfiguration[]> {
    return generateDebugConfigurations(folder, token);
  }
}

export class PremakeInitialConfigurationProvider
  implements vscode.DebugConfigurationProvider
{
  provideDebugConfigurations(
    folder: vscode.WorkspaceFolder | undefined,
    token?: vscode.CancellationToken,
  ): vscode.ProviderResult<vscode.DebugConfiguration[]> {
    return generateDebugConfigurations(folder, token);
  }
}
