import { PremakeTerminalInterface } from "cli/premake/terminalinterface";
import * as vscode from "vscode";
import { LocalStorage, PathUtils } from "./path-utils";
import fs from "fs";
import path from "path";
import { SourceRegistrar } from "language/source-registrar";
function findPremakeFile(dir: string): string | null {
  const queue: string[] = [dir];

  while (queue.length > 0) {
    const currentDir = queue.shift()!;
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isFile() && entry.name === "premake5.lua") {
        return fullPath;
      }

      if (entry.isDirectory()) {
        queue.push(fullPath);
      }
    }
  }

  return null;
}
export interface PremakeProject {
  name: string;
  kind: string;
  language: string;
  files: string[];
  links: string[];
}
export interface PremakeWorkspace {
  name: string;
  configurations: string[];
  location: string;
  architecture: string;
  projects: string[];
}
export class WorkspaceUtils {
  //#region PROPS
  private static _extensionContext: vscode.ExtensionContext;
  public static readonly workspaces = new Map<string, PremakeWorkspace>();
  public static readonly projects = new Map<string, PremakeProject>();
  //#endregion

  public static Initialize(extensionContext: vscode.ExtensionContext) {
    this._extensionContext = extensionContext;

    const disposable = vscode.workspace.onDidChangeWorkspaceFolders((event) =>
      this.OnWorkspaceOpened(event),
    );
    if (vscode.workspace.workspaceFolders) {
      this.RegisterSources();
    }
    this._extensionContext.subscriptions.push(disposable);
  }


  public static GetPremakeWorkspaces(): PremakeWorkspace[] {
    return Array.from(this.workspaces.values());
  }

  public static GetPremakeProjectsFromWorkspace(workspace: PremakeWorkspace): PremakeProject[] {
    return workspace.projects
      .map(projectName => this.projects.get(projectName))
      .filter((project): project is PremakeProject => project !== undefined);
  }
  private static async OnWorkspaceOpened(
    event: vscode.WorkspaceFoldersChangeEvent,
  ): Promise<void> {
    await WorkspaceUtils.RegisterSources();
  }
  //registers the luaCATS files
  private static async RegisterSources() {
    const workspaceRoot = PathUtils.getWorkspaceRoot();
    if (workspaceRoot) {
      const premakeFile = findPremakeFile(workspaceRoot);
      if (premakeFile) {
        const sources = new SourceRegistrar(this._extensionContext);
        await sources.registerSources(["."]);
        await this.ExportWorkspace(premakeFile);
        //per workspace loading needs to be implemented
        await this.LoadExportedWorkspaces();
        await this.LoadExportedProjects();
      }
    }
  }

//#region export
  private static ExportWorkspace(filePath: string | undefined): void {
    const path: string = PathUtils.getResource(this._extensionContext, [
      "export",
      "export.lua",
    ])!;
    //TODO put this in a tmp dir to save space
    PremakeTerminalInterface.executeHidden(
      `--systemscript=${path} --file=${filePath} export --exportdir=${LocalStorage.getTempUri([]).fsPath}/`,
    );
  }
  private static async LoadExportedWorkspaces(): Promise<void> {
    const workspacesDir: vscode.Uri = LocalStorage.getTempUri([
      "export",
      "workspaces",
    ]);

    const entries = await vscode.workspace.fs.readDirectory(workspacesDir);

    for (const [name, type] of entries) {
      if (type === vscode.FileType.File && name.endsWith(".json")) {
        const key = name.replace(/\.json$/, "");
        const fileUri = vscode.Uri.joinPath(workspacesDir, name);

        const fileData = await vscode.workspace.fs.readFile(fileUri);
        const jsonString = Buffer.from(fileData).toString("utf8");
        this.workspaces.set(key, JSON.parse(jsonString));
      }
    }
  }
  private static async LoadExportedProjects(): Promise<void> {
    const projectsDir: vscode.Uri = LocalStorage.getTempUri([
      "export",
      "projects",
    ]);

    const entries = await vscode.workspace.fs.readDirectory(projectsDir);

    for (const [name, type] of entries) {
      if (type === vscode.FileType.File && name.endsWith(".json")) {
        const key = name.replace(/\.json$/, "");
        const fileUri = vscode.Uri.joinPath(projectsDir, name);

        const fileData = await vscode.workspace.fs.readFile(fileUri);
        const jsonString = Buffer.from(fileData).toString("utf8");
        this.projects.set(key, JSON.parse(jsonString));
      }
    }
  }
  //#endregion export
}
