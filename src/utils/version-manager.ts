import { GithubUtils } from "./github-utils";
import { LocalStorage, PathUtils } from "./path-utils";
import { Prompt } from "./prompt-utils";
import { KeyStore } from "./vscode-utils";
import * as vscode from "vscode";
import * as path from "path";

export class VersionManager {
  static async Check(): Promise<boolean> {
    vscode.workspace.onDidChangeConfiguration(async (e) => {
      if (e.affectsConfiguration("premakeManager.cli-source")) {
        if ((await this.Check()) !== true) {
          await this.Install();
        }
      }
    });
    const config = vscode.workspace.getConfiguration("premakeManager");
    const source = config.get<string>("cli-source", "latest");
    return source === "latest"
      ? await this.CheckLatest()
      : await this.CheckArtifact();
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
    return (
      artifact?.workflow_run?.head_sha === KeyStore.get("artifact-cli") &&
      PathUtils.exists(targetUri)
    );
  }

  static async Install() {
    const config = vscode.workspace.getConfiguration("premakeManager");
    const source = config.get<string>("cli-source", "latest");
    if (source === "latest") {
      await GithubUtils.installLatest();
    } else {
      await GithubUtils.installArtifact();
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
