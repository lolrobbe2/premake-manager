// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { PremakeWatcher } from './premakeInstaller/premakeDetector.ts';
import { PremakeVersionManager } from './premakeInstaller/premakeVersionManger.ts';
import { commands } from './commands/register.ts';
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	
	commands.registerCommand(context,"premake.setversion",async () => PremakeVersionManager.showVersionPicker());
	console.log('Congratulations, your extension "premake-manager" is now active!');
	PremakeWatcher.registerWatcher();
}

// This method is called when your extension is deactivated
export function deactivate() 
{
	PremakeWatcher.unregisterWatcher();
}
