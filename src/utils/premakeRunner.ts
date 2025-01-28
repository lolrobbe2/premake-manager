import * as path from 'path';
import { projectManager } from 'projectManagement/projectManager';
import * as vscode from 'vscode';
import { PremakeVersionManager } from '../premakeInstaller/premakeVersionManger';
import { VSCodeUtils } from "./utils";
import { Terminal } from 'terminal/terminal';

export class PremakeInstance {
    private outputChannel: vscode.OutputChannel;
    private readonly action:string;
    private readonly folder:string;
    constructor(folder: string, action: string) {
        const channelName = 'Premake';
        this.folder = folder;
        this.action = action;
        this.outputChannel = vscode.window.createOutputChannel(channelName);
    }

    async run(context: vscode.ExtensionContext): Promise<void> {
        const args = [this.action];

        await vscode.window.withProgress({
            location: vscode.ProgressLocation.Window,
            title: 'Running Premake'
        }, () => new Promise((resolve, reject) => {
            const terminal = vscode.window.createTerminal({
                name: 'Premake Terminal',
                cwd: VSCodeUtils.getWorkspaceFolder(),
                iconPath: vscode.Uri.file(context.asAbsolutePath("resources/media/premake-logo.svg"))
            });
            terminal.sendText(`"${path.join(this.folder, 'premake5')}" ${args.join(' ')}`);

            terminal.show();

            const handleTerminalClose = vscode.window.onDidCloseTerminal(closedTerminal => {
                if (closedTerminal === terminal) {
                    handleTerminalClose.dispose();
                    this.outputChannel.dispose();
                    resolve({});
                }
            });

            terminal.sendText(`cd ${VSCodeUtils.getWorkspaceFolder()}`);
        }));
    }
}


export class PremakeRunner {
    public static async getPremakeInstance(action:string) : Promise<PremakeInstance> {
        const workspaceFolder = VSCodeUtils.getWorkspaceFolder();
        const premakeFolder = path.join(workspaceFolder, '.premake');
        let premakeVersion = PremakeVersionManager.getVersion();
        if(premakeVersion === '')
            {await vscode.commands.executeCommand("premake.setversion");}
        premakeVersion = PremakeVersionManager.getVersion();
        const version: string | null = (await PremakeVersionManager.getVersionRelease(premakeVersion))!.name;
        const versionPlatformFolder = path.join(premakeFolder,version!,PremakeVersionManager.getCurrentPlatform());
        return new PremakeInstance(versionPlatformFolder,action);
    }
    private static getActions(context: vscode.ExtensionContext): vscode.QuickPickItem[]
    {
        return [
            {label: "custom", detail: "run a custom action as default action" },
            {label: "vs2022", detail: " Generate Visual Studio 2022 project files", iconPath: new vscode.ThemeIcon("vscode")},
            {label: "vs2019", detail: " Generate Visual Studio 2019 project files", iconPath: new vscode.ThemeIcon("vscode")},
            {label: "vs2017", detail: " Generate Visual Studio 2017 project files", iconPath: new vscode.ThemeIcon("vscode")},
            {label: "vs2015", detail: " Generate Visual Studio 2015 project files", iconPath: new vscode.ThemeIcon("vscode")},
            {label: "vs2013", detail: " Generate Visual Studio 2013 project files", iconPath: new vscode.ThemeIcon("vscode")},
            {label: "vs2012", detail: " Generate Visual Studio 2012 project files", iconPath: new vscode.ThemeIcon("vscode")},
            {label: "vs2010", detail: " Generate Visual Studio 2010 project files", iconPath: new vscode.ThemeIcon("vscode")},
            {label: "vs2008", detail: " Generate Visual Studio 2008 project files", iconPath: new vscode.ThemeIcon("vscode")},
            {label: "vs2005", detail: " Generate Visual Studio 2005 project files", iconPath: new vscode.ThemeIcon("vscode")},
            {label: "gmake2", detail: " Generate GNU Makefiles (new version)" ,iconPath: vscode.Uri.file(context.asAbsolutePath("resources/media/gnusocial-simple-svgrepo-com.svg"))},
            {label: "xcode4", detail: " Generate Xcode projects"},
            {label: "codelite",  detail: " Generate CodeLite projects"},
        ];
    }
    public static getCurrentAction(): string 
    {
        return vscode.workspace.getConfiguration().get<string>('premake.action', 'not set');
    }
    public static async setDefaultActionPicker(context: vscode.ExtensionContext){
        const action = await PremakeRunner.getActionPicker(context);
        if(action !== undefined) {this.setDefaultAction(action);}
        
    }

    public static async getActionPicker(context: vscode.ExtensionContext) {
        const action = await vscode.window.showQuickPick(this.getActions(context), { placeHolder: 'Select an action' });
        if (action?.label === "custom") {
            const customAction: string | undefined = await vscode.window.showInputBox({ title: "enter custom action" });
            if (customAction !== undefined) {
                return customAction;
            }
        } else if (action !== undefined) {
            return action.label;
        }
    }

    public static async setDefaultAction(action: string) 
    {
        const config = vscode.workspace.getConfiguration();
        await config.update('premake.action', action, vscode.ConfigurationTarget.Workspace);
        projectManager.refresh();
    }
}