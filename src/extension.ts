// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as path from 'path';
import { projectManager } from 'projectManagement/projectManager';
import { ProjectItem } from 'projectManagement/views/projectItem.js';
import * as vscode from 'vscode';
import { commands } from './commands/register.js';
import { PremakeWatcher } from './premakeInstaller/premakeDetector';
import { PremakeVersionManager } from './premakeInstaller/premakeVersionManger';
import * as utils from './utils/mod.js';
import { PremakeRunner } from './utils/premakeRunner.js';
import { TaskHandler, Terminal } from 'terminal/terminal.js';
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	utils.VSCodeUtils.setExtensionContext(context);
	context.subscriptions.push( 
		vscode.workspace.onDidChangeWorkspaceFolders( 
			async event => { await handleWorkspaceFoldersChanged(event); }
		)
	);
	vscode.window.registerTreeDataProvider('workspacesList', projectManager.workspaceProvider);
	registerCommands(context);
	PremakeWatcher.registerWatcher();
	//Terminal.init();
	context.subscriptions.push(vscode.window.registerTerminalProfileProvider('premake5.terminal-profile', {
		provideTerminalProfile: () => {
			console.log('Terminal profile provider called');
			return {
				options: {
					name: 'premake5',
					pty: new Terminal("",false),
					iconPath: vscode.Uri.file(context.asAbsolutePath("resources/media/premake-logo.png"))
				}
			};
		}
	}));
	const taskProvider = vscode.tasks.registerTaskProvider('premake5', {
        provideTasks: () => {
            return [];
        },
		resolveTask: async (task) => {
            return await TaskHandler.runTask(task);
        }
    });
	context.subscriptions.push(taskProvider);
}

function registerCommands(context: vscode.ExtensionContext) {
	commands.registerCommand(context, "premake.setversion", async () => {
		const version: string | undefined = await PremakeVersionManager.showVersionPicker();
		if (version !== undefined) {
			const installed: boolean = await PremakeVersionManager.isVersionReleaseInstalled(version);
			if (!installed) {
				const result: string | undefined = await vscode.window.showInformationMessage("premake is not installed for the selected version would you like to installe it?", 'yes', 'no');
				if (result === 'yes') {
					//await vscode.window.showInformationMessage(`installing premake version: ${version}`);
					await PremakeVersionManager.installPremakeVersion(version);
				}
			}
		}
	});
	commands.registerCommand(context, "premake.cleanup", async () => {
		PremakeVersionManager.cleanPremakeFolder();
	});
	commands.registerCommand(context, "premake.action.run", async (action:string | undefined) => {
		if (action === undefined) {
			action = await PremakeRunner.getActionPicker(context);
		}
		if(action !== undefined) {
			const terminal:vscode.Terminal = utils.VSCodeUtils.getPremakeTerminal();
			terminal.show();
			terminal.sendText(action,true);

		}
	});
	commands.registerCommand(context, "premake.action.default.set", async () => {
		const action = await PremakeRunner.getActionPicker(context);
		if (action !== undefined) { await PremakeRunner.setDefaultAction(action); }
	});
	commands.registerCommand(context, "premake.action.default.run", async () => {
		let action = await PremakeRunner.getCurrentAction();
		if (action !== undefined && action !== '') {
			const instance = await PremakeRunner.getPremakeInstance(action);
			await instance.run(context);
		} else {
			await vscode.commands.executeCommand("premake.action.default.set");
			await vscode.commands.executeCommand("premake.action.default.run");
		}

	});
	
	commands.registerCommand(context,"extension.editProjectItem",(item: vscode.TreeItem) => {
		if (item instanceof ProjectItem) {
			item.edit();
		}
	});
	commands.registerCommand(context, "premake.terminal.new", () => {new Terminal();});
	commands.registerCommand(context, "premake.terminal.get", () => {const terminal:vscode.Terminal = utils.VSCodeUtils.getPremakeTerminal(); terminal.show()});
}

async function handleWorkspaceFoldersChanged(event: vscode.WorkspaceFoldersChangeEvent): Promise<void> { 
	if (event.added.length > 0) {
		if(utils.VSCodeUtils.getWorkspaceFolder() === '') { return; }
		const filePath = path.join(utils.VSCodeUtils.getWorkspaceFolder(), PremakeWatcher.targetFile); 
		await PremakeWatcher.checkWorkspaceAvailable(filePath); 
	}
}
// This method is called when your extension is deactivated
export function deactivate() 
{
	PremakeWatcher.unregisterWatcher();
}