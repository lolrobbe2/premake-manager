// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { ManagerCliTerminal } from 'cli/manager/terminal';
import { TerminalInterface } from 'cli/manager/terminalInterface';
import { CommandManager } from 'commands/command-manager';
import { SourceRegistrar } from 'language/source-registrar';
import { EnvironmentRefresher } from 'utils/vscode-utils';
import * as vscode from 'vscode';
import * as commands from './commands/mod';

import fs from "fs";
import path from "path";
import { ModuleProvider } from 'registry/ModuleProvider';
import ModuleResolver, { RepoSearchType } from 'registry/ModuleResolver';
import { PathUtils } from 'utils/path-utils';

function findPremakeFile(dir: string) {
	const entries = fs.readdirSync(dir, { withFileTypes: true });
	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isFile() && entry.name === "premake5.lua") {
			return fullPath; // found it
		}
		if (entry.isDirectory()) {
			const found: any = findPremakeFile(fullPath);
			if (found) return found;
		}
	}
	return null;
}
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext): Promise<TerminalInterface> {
	CommandManager.initialize(context);
	commands.register();
	TerminalInterface.initialize(context);
	context.subscriptions.push(vscode.window.registerTerminalProfileProvider('premake5.terminal-profile', {
		provideTerminalProfile: () => {
			console.log('Terminal profile provider called');

			return {
				options: {
					name: 'premake manager',
					shellPath: ManagerCliTerminal.getCliExecutablePath(context),
					shellArgs: ["--interactive"],
					iconPath: vscode.Uri.file(context.asAbsolutePath("resources/media/premake-logo.png"))
				}
			};
		}
	}));

	context.subscriptions.push(vscode.window.registerTerminalProfileProvider('premake5.environment-profile', {
		provideTerminalProfile: async () => {
			await EnvironmentRefresher.refreshWindowsPath();

			const isWindows = process.platform === 'win32';
			const shellPath = isWindows ? 'cmd.exe' : 'bash';

			return {
				options: {
					name: 'Premake CLI',
					shellPath: shellPath,
					env: process.env,
					iconPath: vscode.Uri.file(context.asAbsolutePath("resources/media/premake-logo.png"))
				}
			};
		}
	}));

	const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 101); // Higher priority

	statusBarItem.text = '$(terminal) Premake5';
	statusBarItem.tooltip = 'Open the Premake5 Terminal';
	statusBarItem.command = 'premake5.environment-cli'; // must match a registered command
	statusBarItem.show();

	const statusBarItemCliTerminal = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100); // Lower priority

	statusBarItemCliTerminal.text = '$(gear) Premake Man';
	statusBarItemCliTerminal.tooltip = 'Open the Premake Manager Terminal';
	statusBarItemCliTerminal.command = 'premake5.manager-cli'; // must match a registered command
	statusBarItemCliTerminal.show();

	const statusBarItemConfigure = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100); // Lower priority

	statusBarItemConfigure.text = '$(rocket) Premake Conf';
	statusBarItemConfigure.tooltip = 'Configure the workspace';
	statusBarItemConfigure.command = 'premake5.configure'; // must match a registered command
	statusBarItemConfigure.show();

	context.subscriptions.push(statusBarItem);
	context.subscriptions.push(statusBarItemCliTerminal);

	const sources: SourceRegistrar = new SourceRegistrar(context);
	const workspaceRoot = PathUtils.getWorkspaceRoot();
	if (workspaceRoot) {
		const premakeFile = findPremakeFile(workspaceRoot);

		if (premakeFile) {
			await sources.registerSources([
				"premakeFields_1.lua",
				"premakeFields_2.lua",
				"premakeFields_3.lua",
				"premakeGlobals.lua"
			]);
		}
	}
	const moduleProvider = new ModuleProvider(context.extensionUri,context);
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider("premake5.manager.module", moduleProvider)
	);
	console.log(await ModuleResolver.getModules(RepoSearchType.Recent,"",0));
	return TerminalInterface;
}


// This method is called when your extension is deactivated
export function deactivate() {
}