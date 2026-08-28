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
  private static _extensionContext: vscode.ExtensionContext;
  public static readonly workspaces = new Map<string, PremakeWorkspace>();
  public static readonly projects = new Map<string, PremakeProject>();
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
      }
    }
  }

  private static ExportWorkspace(filePath: string | undefined): void {
    const path: string = PathUtils.getResource(this._extensionContext, [
      "export",
      "export.lua",
    ])!;
    //TODO put this in a tmp dir to save space
    PremakeTerminalInterface.executeHidden(`--systemscript=${path} --file=${filePath} export --exportdir=${LocalStorage.getTempUri([]).fsPath}/`);
  }
}
