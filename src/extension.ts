// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { ManagerCliTerminal } from "cli/manager/terminal";
import { TerminalInterface } from "cli/manager/terminalInterface";
import { CommandManager } from "commands/command-manager";
import { SourceRegistrar } from "language/source-registrar";
import { EnvironmentRefresher, KeyStore } from "utils/vscode-utils";
import * as vscode from "vscode";
import * as commands from "./commands/mod";

import fs from "fs";
import path from "path";
import { LocalStorage, PathUtils } from "utils/path-utils";
import { ModuleProvider } from "registry/ModuleProvider";
import { LibraryProvider } from "registry/LibraryProvider";
import { GithubUtils } from "utils/github-utils";
import { VersionManager } from "utils/version-manager";

function findPremakeFile(dir: string) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isFile() && entry.name === "premake5.lua") {
      return fullPath; // found it
    }
    if (entry.isDirectory()) {
      const found: any = findPremakeFile(fullPath);
      if (found) {
        return found;
      }
    }
  }
  return null;
}
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export async function activate(
  context: vscode.ExtensionContext,
): Promise<TerminalInterface> {
  console.time("Premake5: Total Activation");
  // 1. Core Synchronous Setup (Must happen first)
  CommandManager.initialize(context);
  TerminalInterface.initialize(context);
  LocalStorage.initialize(context);
  KeyStore.initialize(context);

  // 2. Fire all independent tasks in parallel
  await Promise.all([
    measureTask("Status Bar", () => registerStatusBar(context)),
    measureTask("Terminals", () => registerTerminals(context)),
    measureTask("Commands", () => commands.register()),
    measureTask("Providers", () => registerProviders(context)),
    measureTask("Sources/FS", async () => {
      const workspaceRoot = PathUtils.getWorkspaceRoot();
      if (workspaceRoot) {
        const premakeFile = findPremakeFile(workspaceRoot);
        if (premakeFile) {
          const sources = new SourceRegistrar(context);
          await sources.registerSources(["."]);
        }
      }
    }),
    measureTask("VersionManager", async () => {
      if ((await VersionManager.Check()) !== true) {
        await VersionManager.Install();
      }
    }),
  ]);

  console.timeEnd("Premake5: Total Activation");
  return TerminalInterface;
}

async function measureTask(name: string, task: () => Promise<any> | any) {
  const label = `Premake5: ${name}`;
  console.time(label);
  try {
    await task();
  } finally {
    console.timeEnd(label);
  }
}

function registerTerminals(context: vscode.ExtensionContext) {
  (context.subscriptions.push(
    vscode.window.registerTerminalProfileProvider("premake5.terminal-profile", {
      provideTerminalProfile: () => {
        console.log("Terminal profile provider called");

        return {
          options: {
            name: "premake manager",
            shellPath: ManagerCliTerminal.getCliExecutablePath(context),
            shellArgs: ["--interive"],
            iconPath: vscode.Uri.file(
              context.asAbsolutePath("resources/media/premake-logo.png"),
            ),
          },
        };
      },
    }),
  ),
    vscode.window.registerTerminalProfileProvider(
      "premake5.environment-profile",
      {
        provideTerminalProfile: async () => {
          await EnvironmentRefresher.refreshWindowsPath();

          const isWindows = process.platform === "win32";
          const shellPath = isWindows ? "cmd.exe" : "bash";

          return {
            options: {
              name: "Premake CLI",
              shellPath: shellPath,
              env: process.env,
              iconPath: vscode.Uri.file(
                context.asAbsolutePath("resources/media/premake-logo.png"),
              ),
            },
          };
        },
      },
    ));
}

function registerProviders(context: vscode.ExtensionContext) {
  const moduleProvider = new ModuleProvider(context.extensionUri, context);
  const libraryProvider = new LibraryProvider(context.extensionUri, context);

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      "premake5.manager.module",
      moduleProvider,
    ),
    vscode.window.registerWebviewViewProvider(
      "premake5.manager.libraries",
      libraryProvider,
    ),
  );
}

function registerStatusBar(context: vscode.ExtensionContext) {
  const statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    101,
  ); // Higher priority

  statusBarItem.text = "$(terminal) Premake5";
  statusBarItem.tooltip = "Open the Premake5 Terminal";
  statusBarItem.command = "premake5.environment-cli";
  statusBarItem.show();

  const statusBarItemCliTerminal = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    100,
  ); // Lower priority

  statusBarItemCliTerminal.text = "$(gear) Premake Man";
  statusBarItemCliTerminal.tooltip = "Open the Premake Manager Terminal";
  statusBarItemCliTerminal.command = "premake5.manager-cli";
  statusBarItemCliTerminal.show();

  const statusBarItemConfigure = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    100,
  ); // Lower priority

  statusBarItemConfigure.text = "$(rocket) Premake Conf";
  statusBarItemConfigure.tooltip = "Configure the workspace";
  statusBarItemConfigure.command = "premake5.configure";
  statusBarItemConfigure.show();

  context.subscriptions.push(statusBarItem);
  context.subscriptions.push(statusBarItemCliTerminal);
}

// This method is called when your extension is deivated
export function deivate() {}
