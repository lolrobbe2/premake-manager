import { PremakeTerminalInterface } from "cli/premake/terminalinterface";
import fs from "fs";
import { SourceRegistrar } from "language/source-registrar";
import path from "path";
import { LocalStorage, PathUtils } from "utils/path-utils";
import * as vscode from "vscode";
import { PremakeProject, PremakeWorkspace } from "./types";
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
export class WorkspaceManager implements vscode.Disposable {
    //#region PROPS
    private _extensionContext: vscode.ExtensionContext;
    private readonly _vscodeWorkspace: vscode.WorkspaceFolder;

    public readonly workspaces = new Map<string, PremakeWorkspace>();
    public readonly projects = new Map<string, PremakeProject>();
    //#endregion

    constructor(extensionContext: vscode.ExtensionContext, workspace: vscode.WorkspaceFolder) {
        this._extensionContext = extensionContext;
        this._vscodeWorkspace = workspace
        // Track workspace folder events
        this._extensionContext.subscriptions.push(this);
    }

    /**
     * Cleans up all event listeners and cached data when extension deactivates or instance is destroyed.
     */
    public dispose(): void {
        // Clear maps to free memory
        this.workspaces.clear();
        this.projects.clear();
    }

    public GetPremakeWorkspaces(): PremakeWorkspace[] {
        return Array.from(this.workspaces.values());
    }

    public GetPremakeProjectsFromWorkspace(workspace: PremakeWorkspace): PremakeProject[] {
        return workspace.projects
            .map((projectName) => this.projects.get(projectName))
            .filter((project): project is PremakeProject => project !== undefined);
    }


    // registers the luaCATS files
    public async RegisterSources(): Promise<void> {
        if (this._vscodeWorkspace.uri.fsPath) {
            const premakeFile = findPremakeFile(this._vscodeWorkspace.uri.fsPath);
            if (premakeFile) {
                const sources = new SourceRegistrar(this._extensionContext);
                await sources.registerSources(["."]);
                await this.ExportWorkspace(premakeFile);
                // per workspace loading needs to be implemented
                await this.LoadExportedWorkspaces();
                await this.LoadExportedProjects();
            }
        }
    }

    //#region export
    private ExportWorkspace(filePath: string | undefined): void {
        const path: string = PathUtils.getResource(this._extensionContext, [
            "export",
            "export.lua",
        ])!;
        PremakeTerminalInterface.executeHidden(
            `--systemscript=${path} --file=${filePath} export --exportdir=${LocalStorage.getTempUri([]).fsPath}/`,
        );
    }

    private async LoadExportedWorkspaces(): Promise<void> {
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

    private async LoadExportedProjects(): Promise<void> {
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