// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { ManagerCliTerminal } from 'cli/manager/terminal';
import { TerminalInterface } from 'cli/manager/terminalInterface';
import { TerminalHandler } from 'commands/terminal-command';
import * as vscode from 'vscode';
import * as commands from './commands/mod';
import { CommandManager } from 'commands/command-manager';

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
					name: 'premake5',
					shellPath: ManagerCliTerminal.getCliExecutablePath(context),
					shellArgs: [ "--interactive" ],
					iconPath: vscode.Uri.file(context.asAbsolutePath("resources/media/premake-logo.png"))
				}
			};
		}
	}));

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