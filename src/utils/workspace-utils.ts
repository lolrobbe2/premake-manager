import { WorkspaceManager } from "configuration/workspace/workspace-manager";
import * as vscode from "vscode";
export class WorkspaceUtils {
  public static readonly workspaces = new Map<vscode.WorkspaceFolder, WorkspaceManager>(); 
}