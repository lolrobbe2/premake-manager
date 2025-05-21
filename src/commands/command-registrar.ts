import * as vscode from 'vscode';

export abstract class CommandRegistrar {
    protected context: vscode.ExtensionContext;
    protected commandId: string;

    constructor(context: vscode.ExtensionContext, commandId: string) {
        this.context = context;
        this.commandId = commandId;

        const disposable = vscode.commands.registerCommand(this.commandId, (...args: any[]) => {
            this.execute(...args);
        });

        this.context.subscriptions.push(disposable);
    }

    /**
     * Derived classes must implement this to handle the command execution.
     */
    protected abstract execute(...args: any[]): void;
}
