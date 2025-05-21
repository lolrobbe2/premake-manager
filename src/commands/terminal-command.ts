import { PremakeCliTerminal } from 'cli/terminal';
import { EnvironmentRefresher } from 'utils/vscode-utils';
import * as vscode from 'vscode';
import { CommandRegistrar } from "./command-registrar";

export class TerminalCommand extends CommandRegistrar {
    protected execute(...args: any[]): void {
        const terminal: PremakeCliTerminal = new PremakeCliTerminal(this.context);
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
        
        if(terminal === undefined)
            return;

        if (this.seenTerminals.has(terminal)) {
            return; // Already handled
        }

        const name: string = terminal.name;
        let options: vscode.TerminalOptions = terminal.creationOptions;
        if (options.shellArgs !== undefined  && options.shellArgs?.length !== 0)
            return;

        await EnvironmentRefresher.refreshWindowsPath();

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
        
        console.log(process.env.PATH);
        let updatedTerminal : vscode.Terminal =  vscode.window.createTerminal(newOptions);
        updatedTerminal.show(false);

        this.seenTerminals.add(updatedTerminal);
        terminal.dispose();
    }

    public static cleanupTerminal(terminal: vscode.Terminal): void {
        this.seenTerminals.delete(terminal);
    }
}