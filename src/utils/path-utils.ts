import * as path from "path";
import * as vscode from "vscode";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { Prompt } from "./prompt-utils";
export class PathUtils {
  /**
   * Returns the root path of the first workspace folder, if available.
   */
  public static getWorkspaceRoot(): string | undefined {
    const folders = vscode.workspace.workspaceFolders;
    if (folders && folders.length > 0) {
      return folders[0].uri.fsPath;
    }
    return undefined;
  }

  /**
   * @param context extension context
   */
  public static getExtensionResourceRoot(
    context: vscode.ExtensionContext,
  ): string | undefined {
    return path.join(context.extensionPath, "resources");
  }

  public static getResource(
    context: vscode.ExtensionContext,
    subpaths: string[],
  ): string | undefined {
    return path.join(this.getExtensionResourceRoot(context)!, ...subpaths);
  }

  public static getMediaResource(
    context: vscode.ExtensionContext,
    subpaths: string[],
  ): vscode.Uri {
    // REMOVED 'resources' from here because getExtensionResourceRoot already includes it
    // This stops the "resources/resources" doubling
    return vscode.Uri.file(
      [context.extensionPath, "resources", "media", ...subpaths].join("/"),
    );
  }
  static async exists(uri: vscode.Uri): Promise<boolean> {
    try {
      await vscode.workspace.fs.stat(uri);
      return true;
    } catch {
      return false;
    }
  }
}
export class LocalStorage {
  static storagUri: vscode.Uri | undefined;
  static initialize(context: vscode.ExtensionContext) {
    this.storagUri = context.globalStorageUri;
  }

  static async downloadToUri(
    sourceUrl: string,
    targetUri: vscode.Uri,
    onProgress?: (downloaded: number, total: number) => void,
  ) {
    const response = await fetch(sourceUrl);
    if (!response.ok) {
      Prompt.Error(`Download failed: ${response.statusText}`);
      return;
    }
    const total = Number(response.headers.get("content-length")) || 0;
    const reader = response.body?.getReader();
    if (!reader) {
      Prompt.Error("Response Body is full");
      return;
    }

    let downloaded = 0;
    const chunks: Uint8Array[] = [];

    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }

      chunks.push(value);
      downloaded += value.length;

      if (onProgress) {
        onProgress(downloaded, total);
      }
    }

    // Merge chunks into a single Uint8Array
    const data = new Uint8Array(downloaded);
    let position = 0;
    for (const chunk of chunks) {
      data.set(chunk, position);
      position += chunk.length;
    }

    await vscode.workspace.fs.writeFile(targetUri, data);

    if (targetUri.scheme === "file") {
      const { chmodSync } = await import("fs");
      chmodSync(targetUri.fsPath, 0o755);
    }
  }
  static getResourceRootPath(): string {
    return path.join(this.storagUri!.path, "resources");
  }
  static getResourceRootUri(): vscode.Uri {
    return vscode.Uri.joinPath(this.storagUri!, "resources");
  }
  static getResourcePath(subpaths: string[]): string {
    return path.join(this.getResourceRootPath(), ...subpaths);
  }
  static getResourceUri(subpaths: string[]): vscode.Uri {
    return vscode.Uri.joinPath(this.getResourceRootUri(), ...subpaths);
  }
  static getBinPath(subpaths: string[]): string {
    return this.getResourcePath(["bin", ...subpaths]);
  }
  static getBinUri(subpaths: string[]): vscode.Uri {
    return this.getResourceUri(["bin", ...subpaths]);
  }
}
