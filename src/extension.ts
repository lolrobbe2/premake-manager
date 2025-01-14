// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { commands } from './commands/register.js';
import { PremakeWatcher } from './premakeInstaller/premakeDetector.js';
import { PremakeVersionManager } from './premakeInstaller/premakeVersionManger.js';
import { PremakeRunner } from './utils/premakeRunner.js';
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	commands.registerCommand(context,"premake.setversion",async () =>{
		const version: string | undefined = await PremakeVersionManager.showVersionPicker();
		if(version !== undefined) {
			const installed: boolean = await PremakeVersionManager.isVersionReleaseInstalled(version);
			if(!installed){
				const result: string | undefined = await vscode.window.showInformationMessage("premake is not installed for the selected version would you like to installe it?",'yes','no');
				if(result === 'yes'){
					//await vscode.window.showInformationMessage(`installing premake version: ${version}`);
					await PremakeVersionManager.installPremakeVersion(version);
				}
			}
		}
	});
	commands.registerCommand(context,"premake.cleanup",async () =>{
		PremakeVersionManager.cleanPremakeFolder();
	});
	commands.registerCommand(context,"premake.action.run",async () => {
		const action = await PremakeRunner.getActionPicker(context);
		if(action !== undefined) {
			const instance = await PremakeRunner.getPremakeInstance(action);
			await instance.run(context);
		} 
	});
	commands.registerCommand(context,"premake.action.default.set",async () => {
		const action = await PremakeRunner.getActionPicker(context);
		if(action !== undefined) { await PremakeRunner.setDefaultAction(action); }
	});
	commands.registerCommand(context,"premake.action.default.run",async () => {
		let action = await PremakeRunner.getCurrentAction();
		if(action !== undefined && action !== '') {
			const instance = await PremakeRunner.getPremakeInstance(action);
			await instance.run(context);
		} else {
			await vscode.commands.executeCommand("premake.action.default.set");
			await vscode.commands.executeCommand("premake.action.default.run");
		}

	});
	PremakeWatcher.registerWatcher();

}

// This method is called when your extension is deactivated
export function deactivate() 
{
	PremakeWatcher.unregisterWatcher();
}
