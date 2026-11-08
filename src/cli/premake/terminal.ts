import * as path from 'path';
import { PathUtils } from 'utils/path-utils';
import * as vscode from 'vscode';

export class PremakeCliTerminal {
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
    public openTerminal(hidden:boolean = false): void {
        if (this.terminal) {
            if(!hidden){
                this.terminal.show();
            }
            return;
        }

        this.terminal = vscode.window.createTerminal({
            name: 'Premake5',
            iconPath: vscode.Uri.file(
                path.join(this.context.extensionPath, 'resources', 'media', 'premake-logo.png')
            ),
            cwd: PathUtils.getWorkspaceRoot()
        });

        if(!hidden){
            this.terminal.show();
        }
        vscode.window.onDidCloseTerminal(closedTerminal => {
            if (closedTerminal === this.terminal) {
                this.terminal.dispose();
                this.terminal = undefined;
                
            }
        });
    }

    public closeTerminal(){
        this.terminal?.hide();
    }

    /**
     * Sends a command string to the terminal (creates it if needed).
     * @param command The command string to execute in the terminal
     */
    public executeCommand(command: string, hidden: boolean = false): vscode.Terminal | undefined {
        if (!this.terminal) {
            this.openTerminal(hidden);
            setTimeout(() => {
                this.terminal!.sendText(command, true);
            }, 100);
        } else {
            this.terminal.show();
            this.terminal.sendText(command, true);
        }
        return this.terminal;
    }

    /**
     * Returns the active terminal instance if it exists
     */
    public getTerminal(): vscode.Terminal | undefined {
        return this.terminal;
    }
}
