import { ManagerCliTerminal } from 'cli/manager/terminal';
import * as os from "os";
import { EnvironmentRefresher } from 'utils/vscode-utils';
import * as vscode from 'vscode';
import { CommandRegistrar } from "./command-registrar";
export class TerminalCommand extends CommandRegistrar {
    protected execute(...args: any[]): void {
        const terminal: ManagerCliTerminal = new ManagerCliTerminal(this.context);
        terminal.openTerminal(true);
    }
    constructor(context: vscode.ExtensionContext) {
        super(context,'premake5.manager-cli')
    }
}

export class EnvironmentAwareTerminal extends CommandRegistrar {
    protected execute(...args: any[]): void {
        EnvironmentRefresher.refreshWindowsPath();

        const isWindows = process.platform === 'win32';
        const shellPath = isWindows ? 'cmd.exe' : 'bash';
        const terminal = vscode.window.createTerminal({
            name: 'Premake CLI',
            shellPath: shellPath,
            env: process.env
        });

        terminal.show();
    }

    constructor(context: vscode.ExtensionContext) {
        super(context, 'premake5.environment-cli')
    }
}

export class TerminalHandler {
    private static seenTerminals: WeakSet<vscode.Terminal> = new WeakSet();

    public static async updateEnvironment(terminal : vscode.Terminal | undefined)
    {
        
        if (terminal === undefined || this.seenTerminals.has(terminal))
            return;

        terminal.hide();

        const name: string = terminal.name;
        let options: vscode.TerminalOptions = terminal.creationOptions;
        if (options.shellArgs !== undefined  && options.shellArgs?.length !== 0)
            return;

        const newOptions: vscode.TerminalOptions = {
            name: options.name ?? terminal.name,
            shellPath: options.shellPath,
            cwd: options.cwd,
            shellArgs: options.shellArgs,
            env: { ...process.env }, // clone current environment
            iconPath: options.iconPath,
            message: options.message,
            isTransient: options.isTransient,
            location: options.location
        };
        
        let updatedTerminal : vscode.Terminal =  vscode.window.createTerminal(newOptions);
        updatedTerminal.show(false);

        this.seenTerminals.add(updatedTerminal);
        // Wait a tiny bit to let the new terminal start (optional but helps)
        await new Promise((resolve) => setTimeout(resolve, 100));

        terminal.dispose();
    }

    public static cleanupTerminal(terminal: vscode.Terminal): void {
        this.seenTerminals.delete(terminal);
    }



    public static async getBuiltInTerminalProfiles(): Promise<Record<string, vscode.TerminalProfile> | undefined> {
        const platform = os.platform();
        let configKey = "";

        if (platform === "win32") {
            configKey = "terminal.integrated.profiles.windows";
        } else if (platform === "darwin") {
            configKey = "terminal.integrated.profiles.osx";
        } else {
            configKey = "terminal.integrated.profiles.linux";
        }

        const profiles = vscode.workspace.getConfiguration().get<Record<string, vscode.TerminalProfile>>(configKey);
        return profiles;
    }
}