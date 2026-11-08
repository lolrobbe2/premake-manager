import * as path from "node:path";
import * as vscode from "vscode";

import {
  BuildTools,
  detectBuildTools,
  DetectedTool,
} from "configuration/tools/detected-tool";

import { WorkspaceUtils } from "utils/workspace-utils";
import { EnvironmentRefresher } from "utils/vscode-utils";

export type BuildToolName = keyof BuildTools;

export function getPremakeBuildTaskName(
  workspaceName: string,
  projectName: string,
  configuration: string,
  tool: BuildToolName,
): string {
  return `[${workspaceName}][${configuration}] ${projectName} (${tool})`;
}

interface DetectedBuildTaskDefinition extends vscode.TaskDefinition {
  type: "premakeBuild";
  tool: BuildToolName;
  workspaceName: string;
  projectName: string;
  configuration: string;
}

interface PremakeWorkspaceBuildMetadata {
  location?: string;
  filename?: string;
}

export class PremakeActionTaskProvider implements vscode.TaskProvider {
  resolveTask(
    task: vscode.Task,
    token: vscode.CancellationToken,
  ): vscode.ProviderResult<vscode.Task> {
    return task;
  }
  public async provideTasks(
    token: vscode.CancellationToken,
  ): Promise<vscode.Task[]> {
    await EnvironmentRefresher.refreshWindowsPath();

    const tools: BuildTools = await detectBuildTools();

    const availableTools = (
      Object.entries(tools) as [BuildToolName, DetectedTool | undefined][]
    ).filter(
      (entry): entry is [BuildToolName, DetectedTool] => entry[1] !== undefined,
    );

    const tasks: vscode.Task[] = [];

    for (const folder of vscode.workspace.workspaceFolders ?? []) {
      if (token.isCancellationRequested) {
        break;
      }

      const workspaceManager = WorkspaceUtils.workspaces.get(folder);

      for (const workspace of workspaceManager?.GetPremakeWorkspaces() ?? []) {
        const projects =
          workspaceManager?.GetPremakeProjectsFromWorkspace(workspace) ?? [];

        const metadata = workspace as typeof workspace &
          PremakeWorkspaceBuildMetadata;

        const buildDirectory = metadata.location
          ? path.resolve(folder.uri.fsPath, metadata.location)
          : folder.uri.fsPath;

        const solutionName = metadata.filename ?? workspace.name;
        const solutionExtension = path.extname(solutionName).toLowerCase();

        const resolvedSolutionName =
          solutionExtension === ".sln" || solutionExtension === ".slnx"
            ? solutionName
            : `${solutionName}.sln`;

        const solutionFile = path.join(buildDirectory, resolvedSolutionName);

        for (const project of projects) {
          for (const configuration of workspace.configurations) {
            for (const [toolName, tool] of availableTools) {
              if (token.isCancellationRequested) {
                return tasks;
              }

              tasks.push(
                this.createBuildTask(
                  toolName,
                  tool,
                  workspace.name,
                  project.name,
                  configuration,
                  buildDirectory,
                  solutionFile,
                  folder,
                ),
              );
            }
          }
        }
      }
    }

    return tasks;
  }

  private createBuildTask(
    toolName: BuildToolName,
    tool: DetectedTool,
    workspaceName: string,
    projectName: string,
    configuration: string,
    buildDirectory: string,
    solutionFile: string,
    folder: vscode.WorkspaceFolder,
  ): vscode.Task {
    const definition: DetectedBuildTaskDefinition = {
      type: "premakeBuild",
      tool: toolName,
      workspaceName,
      projectName,
      configuration,
    };

    let args: string[];

    switch (toolName) {
      case "make":
        args = [`config=${configuration.toLowerCase()}`, projectName];
        break;

      case "ninja":
        args = [`${projectName}_${configuration}`];
        break;

      case "msbuild":
        args = [
          solutionFile,
          `/t:${projectName}:Build`,
          `/p:Configuration=${configuration}`,
          "/verbosity:minimal",
        ];
        break;
    }

    const execution = new vscode.ProcessExecution(tool.command, args, {
      cwd: buildDirectory,
    });

    const taskName = getPremakeBuildTaskName(
      workspaceName,
      projectName,
      configuration,
      toolName,
    );

    const task = new vscode.Task(
      definition,
      folder, // This IS the folder scope
      taskName,
      "Premake5",
      execution,
    );

    task.group = vscode.TaskGroup.Build;
    task.detail = `${tool.version} | ${tool.command}`;

    return task;
  }
}
