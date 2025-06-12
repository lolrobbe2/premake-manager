// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { ManagerCliTerminal } from 'cli/manager/terminal';
import { TerminalInterface } from 'cli/manager/terminalInterface';
import { CommandManager } from 'commands/command-manager';
import { TerminalHandler } from 'commands/terminal-command';
import { EnvironmentRefresher } from 'utils/vscode-utils';
import * as vscode from 'vscode';
import * as commands from './commands/mod';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) : TerminalInterface {
	CommandManager.initialize(context)
	commands.register();
	TerminalInterface.initialize(context);
	context.subscriptions.push(vscode.window.registerTerminalProfileProvider('premake5.terminal-profile', {
		provideTerminalProfile: () => {
			console.log('Terminal profile provider called');
			
			return {
				options: {
					name: 'premake manager',
					shellPath: ManagerCliTerminal.getCliExecutablePath(context),
					shellArgs: [ "--interactive" ],
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

	const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);

	statusBarItem.text = '$(terminal) Premake5';
	statusBarItem.tooltip = 'Open the Premake5 Terminal';
	statusBarItem.command = 'premake5.environment-cli'; // must match a registered command
	statusBarItem.show();

	context.subscriptions.push(statusBarItem);

	vscode.window.onDidOpenTerminal(async (terminal) => {
		//console.log(await TerminalHandler.getBuiltInTerminalProfiles());
		TerminalHandler.updateEnvironment(terminal);
	});

	vscode.window.onDidCloseTerminal(async (terminal) => {
		TerminalHandler.cleanupTerminal(terminal);
		//await EnvironmentRefresher.refreshWindowsPath();
	})
	return TerminalInterface;
}


// This method is called when your extension is deactivated
export function deactivate() 
{
}