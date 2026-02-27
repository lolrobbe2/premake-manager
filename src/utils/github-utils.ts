import * as vscode from "vscode";
import { Octokit, RestEndpointMethodTypes } from "@octokit/rest";
import { Prompt } from "./prompt-utils";
import { LocalStorage, PathUtils } from "./path-utils";
import path from "path/posix";
import AdmZip from "adm-zip";
import { KeyStore } from "./vscode-utils";

export class GithubUtils {
  static session: vscode.AuthenticationSession | undefined;
  static client: Octokit | undefined;

  public static async Authenticate(): Promise<void> {
    this.session = await vscode.authentication.getSession("github", ["repo"], {
      createIfNone: true,
    });

    if (this.session === undefined) {
      Prompt.Error("[Github-Utils] unable to aquire session token");
      return;
    }
    this.client = new Octokit({
      auth: GithubUtils.session?.accessToken,
      userAgent: "vscode.premake-manager",
    });
  }
  static get owner() {
    return "lolrobbe2";
  }
  static get repoName() {
    return "premake-manager-cli";
  }
  static get rest(): Octokit["rest"] | undefined {
    if (!this.client) {
      Prompt.Error("[Github-Utils] Octokit client is not initialized.");
      return undefined;
    }
    return this.client.rest;
  }
  static get repo(): Octokit["rest"]["repos"] | undefined {
    return this.rest?.repos;
  }
  static get actions(): Octokit["rest"]["actions"] | undefined {
    return this.rest?.actions;
  }

  static get suffix(): string {
    return (
      {
        win32: "-win.exe",
        linux: "-linux",
        darwin: "-darwin",
      } as any
    )[process.platform];
  }
  static get executableName() {
    return `premake-manager${this.suffix}`;
  }

  static get artifactExecutable(): string {
    return (
      {
        win32: "premake-manager-cli.exe",
        linux: "premake-manager-cli",
        darwin: "premake-manager-cli",
      } as any
    )[process.platform];
  }
  static get artifactName(): string {
    return (
      {
        win32: "build-windows-latest",
        linux: "build-ubuntu-latest",
        darwin: "build-macos-latest",
      } as any
    )[process.platform];
  }
  static async fetchLatest(): Promise<
    | RestEndpointMethodTypes["repos"]["getLatestRelease"]["response"]["data"]
    | undefined
  > {
    await this.Authenticate();
    const response = await this.repo?.getLatestRelease({
      owner: this.owner,
      repo: "premake-manager-cli",
    });

    return response?.data;
  }
  static async fetchArtifact(
    branch: string | undefined = undefined,
  ): Promise<
    | RestEndpointMethodTypes["actions"]["listWorkflowRunArtifacts"]["response"]["data"]["artifacts"][0]
    | undefined
  > {
    await this.Authenticate();
    const runs = await this.actions?.listWorkflowRunsForRepo({
      owner: this.owner,
      repo: this.repoName,
      branch,
      status: "success",
      per_page: 1,
    });
    const latestRunId = runs?.data.workflow_runs[0]?.id;
    const artifacts = (
      await this.actions?.listWorkflowRunArtifacts({
        owner: this.owner,
        repo: this.repoName,
        run_id: latestRunId!,
      })
    )?.data?.artifacts;

    const platformArtifact = artifacts?.find((artifact) => {
      if (artifact.name === this.artifactName) {
        return artifact;
      }
    });

    return platformArtifact;
  }

  static async installArtifact(branch: string | undefined = undefined) {
    return await Prompt.Progress("Installing Premake CLI", async (p) => {
      p.report({ message: "Fetching..." });
      const artifact = await this.fetchArtifact(branch);

      if (!artifact) {
        return Prompt.Error(`[Github-Utils] No binary for ${process.platform}`);
      }
      const targetUri = LocalStorage.getBinUri([
        "artifact",
        `premake-manager.zip`,
      ]);

      if (
        artifact.workflow_run?.head_sha === KeyStore.get("artifact-cli") &&
        (await PathUtils.exists(targetUri))
      ) {
        return;
      }

      const download = await this.actions!.downloadArtifact({
        owner: this.owner,
        repo: this.repoName,
        artifact_id: artifact.id, // Use the ID, not the URL string
        archive_format: "zip",
      });
      // Use the streaming downloader with the progress callback
      await LocalStorage.downloadToUri(
        download.url,
        targetUri,
        (downloaded, total) => {
          const percent = total ? Math.round((downloaded / total) * 100) : 0;
          p.report({
            message: `Downloading: ${percent}%`,
            increment: percent,
          });
        },
      );

      const targetExecutableUri = LocalStorage.getBinUri(["artifact"]);
      const archive = new AdmZip(targetUri.fsPath);
      archive.extractEntryTo(
        this.artifactExecutable,
        targetExecutableUri.fsPath,
        undefined,
        true,
      );
      await vscode.workspace.fs.delete(targetUri);
      KeyStore.update("artifact-cli", artifact?.workflow_run?.head_sha);
      p.report({ message: "Installation complete" });
    });
  }
  static async installLatest() {
    return await Prompt.Progress("Installing Premake CLI", async (p) => {
      p.report({ message: "Fetching..." });
      const latest = await this.fetchLatest();

      const asset = latest?.assets.find((a) => a.name.endsWith(this.suffix));
      if (!asset) {
        return Prompt.Error(`[Github-Utils] No binary for ${process.platform}`);
      }
      const targetUri = LocalStorage.getBinUri([
        "latest",
        `premake-manager${this.suffix}`,
      ]);

      if (
        latest?.id === KeyStore.get("artifact-cli") &&
        (await PathUtils.exists(targetUri))
      ) {
        return;
      }
      // Use the streaming downloader with the progress callback
      await LocalStorage.downloadToUri(
        asset.browser_download_url,
        targetUri,
        (downloaded, total) => {
          const percent = total ? Math.round((downloaded / total) * 100) : 0;
          p.report({
            message: `Downloading: ${percent}%`,
            increment: percent,
          });
        },
      );
      KeyStore.update("latest-cli", latest?.id);
      p.report({ message: "Installation complete" });
    });
  }
}
