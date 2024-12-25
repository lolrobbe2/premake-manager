// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { commands } from './commands/register.js';
import { PremakeWatcher } from './premakeInstaller/premakeDetector.js';
import { PremakeVersionManager } from './premakeInstaller/premakeVersionManger.js';
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	commands.registerCommand(context,"premake.setversion",async () =>{
		await PremakeVersionManager.showVersionPicker();
		const version: string = await PremakeVersionManager.getVersion();
		const installed: boolean = await PremakeVersionManager.isVersionReleaseInstalled(version);
		if(!installed){
			const result: string | undefined = await vscode.window.showInformationMessage("premake is not installed for the selected version would you like to installe it?",'yes','no');
			if(result === 'yes'){
				//await vscode.window.showInformationMessage(`installing premake version: ${version}`);
				await PremakeVersionManager.installPremakeVersion(version);
			}
		}
	});
	console.log('Congratulations, your extension "premake-manager" is now active!');
	PremakeWatcher.registerWatcher();
}

// This method is called when your extension is deactivated
export function deactivate() 
{
	PremakeWatcher.unregisterWatcher();
}
