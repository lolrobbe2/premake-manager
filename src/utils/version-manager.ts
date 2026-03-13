import * as vscode from "vscode";
import { GithubUtils } from "./github-utils";
import { LocalStorage, PathUtils } from "./path-utils";
import { KeyStore } from "./vscode-utils";

export class VersionManager {
  static initialize() : void {
    vscode.workspace.onDidChangeConfiguration(async (e) => {
      if (e.affectsConfiguration("premakeManager.cli-source")) {
        if ((await this.Check()) !== true) {
          await this.Install();
        }
      }
      if (e.affectsConfiguration("premakeManager.cli-source-branch")) {
        if ((await this.Check()) !== true) {
          await this.Install();
        }
      }
    });
  }
  static async Check(): Promise<boolean> {
    const config = vscode.workspace.getConfiguration("premakeManager");
    const source = config.get<string>("cli-source", "latest");
    const branch = config.get<string>("cli-source-branch", "latest");

    return source === "latest"
      ? await this.CheckLatest()
      : await this.CheckArtifact(branch);
  }
  static async CheckLatest(): Promise<boolean> {
    const targetUri = LocalStorage.getBinUri([
      "latest",
      `premake-manager${GithubUtils.suffix}`,
    ]);
    const latest = await GithubUtils.fetchLatest();
    return (
      latest?.id === KeyStore.get("latest-cli") && PathUtils.exists(targetUri)
    );
  }
  static async CheckArtifact(
    branch: string | undefined = undefined,
  ): Promise<boolean> {
    const targetUri = LocalStorage.getBinUri([
      "artifact",
      GithubUtils.artifactExecutable,
    ]);
    const artifact = await GithubUtils.fetchArtifact(branch);
    if(artifact === undefined)
      return false;
    return (
      artifact?.workflow_run?.head_sha === KeyStore.get("artifact-cli") && KeyStore.get("artifact-branch") === branch &&
      await PathUtils.exists(targetUri)
    );
  }

  static async Install() {
    const config = vscode.workspace.getConfiguration("premakeManager");
    const source = config.get<string>("cli-source", "latest");
    if (source === "latest") {
      await GithubUtils.installLatest();
    } else {
      const branch: string = config.get<string>("cli-source-branch", "main");
      await GithubUtils.installArtifact(branch);
    }
  }
  static GetExecutablePath() {
    const config = vscode.workspace.getConfiguration("premakeManager");
    const source = config.get<string>("cli-source", "latest");
    if (source === "latest") {
      return LocalStorage.getBinUri([
        "latest",
        `premake-manager${GithubUtils.suffix}`,
      ]);
    } else {
      return LocalStorage.getBinUri([
        "artifact",
        GithubUtils.artifactExecutable,
      ]);
    }
  }
}
