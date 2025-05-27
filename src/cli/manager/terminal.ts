import * as path from 'path';
import { PathUtils } from 'utils/path-utils';
import { Prompt } from 'utils/prompt-utils';
import * as vscode from 'vscode';

export class ManagerCliTerminal {
    private terminal: vscode.Terminal | undefined;
    private context: vscode.ExtensionContext;

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
        this.terminal?.shellIntegration
    }

    /**
     * Opens the CLI terminal. Adds `--interactive` flag if requested.
     * @param interactive Whether to launch the CLI with `--interactive`
     */
    public openTerminal(interactive: boolean = false): void {
        if (this.terminal) {
            this.terminal.show();
            return;
        }

        const cliExecutable = ManagerCliTerminal.getCliExecutablePath(this.context);

        if (!cliExecutable) {
            Prompt.Error('Unsupported platform or CLI executable not found.');
            return;
        }

        const shellArgs: string[] = [];
        if (interactive) {
            shellArgs.push('--interactive');
        }

        this.terminal = vscode.window.createTerminal({
            name: 'Premake5 Manager CLI',
            shellPath: cliExecutable,
            shellArgs: shellArgs,
            iconPath: vscode.Uri.file(
                path.join(this.context.extensionPath, 'resources', 'media', 'premake-logo.png')
            ),
            cwd: PathUtils.getWorkspaceRoot()
        });

        this.terminal.show();

        vscode.window.onDidCloseTerminal(closedTerminal => {
            if (closedTerminal === this.terminal) {
                this.terminal.dispose();
                this.terminal = undefined;
                
            }
        });
    }

    /**
     * Sends a command string to the terminal (creates it if needed).
     * @param command The command string to execute in the terminal
     */
    public executeCommand(command: string): void {
        if (!this.terminal) {
            this.openTerminal(true);
            setTimeout(() => {
                this.terminal!.sendText(command, true);
            }, 100);
        } else {
            this.terminal.show();
            this.terminal.sendText(command, true);
        }
    }

    /**
     * Returns the active terminal instance if it exists
     */
    public getTerminal(): vscode.Terminal | undefined {
        return this.terminal;
    }

    /**
     * Resolves the full path to the CLI executable based on platform
     */
    public static getCliExecutablePath(context: vscode.ExtensionContext): string | undefined {
        if (process.platform === 'win32') {
            return path.join(context.extensionPath, 'resources', 'cli', 'premake-manager-cli-win.exe');
        } else if (process.platform === 'linux') {
            return path.join(context.extensionPath, 'resources', 'cli', 'premake-manager-cli-linux');
        } else if (process.platform === 'darwin') {
            return path.join(context.extensionPath, 'resources', 'cli', 'premake-manager-cli-mac');
        }
        return undefined;
    }
}
