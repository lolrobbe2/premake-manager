import * as vscode from 'vscode';

export abstract class CommandRegistrar {
    protected context: vscode.ExtensionContext;
    protected commandId: string;
    protected name: string;
    protected description: string;

    constructor(context: vscode.ExtensionContext,register: boolean, commandId: string, name: string) {
        this.context = context;
        this.commandId = commandId;

        const parts = name.split('|');
        this.name = parts[0].trim();
        this.description = parts.length > 1 ? parts[1].trim() : "";

        const disposable = vscode.commands.registerCommand(this.commandId, (...args: any[]) => {
            this.execute(...args);
        });
        console.info(`[COMMAND_REGISTRAR] registered with id: ${this.commandId}, name: ${this.name}`)
        this.context.subscriptions.push(disposable);
    }

    /**
     * Derived classes must implement this to handle the command execution.
     */
    protected abstract execute(...args: any[]): void;

    /**
     * this returns the name of the command
     */
    public get commandName() : string {
        return this.name;
    }
    

    /**
     * this returns the name of the command
     */
    public get commandDescription(): string {
        return this.description;
    }



    /**
     * this getter returs the commands ID
     */
    public get id() : string {
        return this.commandId;
    }

    
    /**
     * Logical equality based on command ID.
     */
    public equals(other: unknown): boolean {
        return (
            other instanceof CommandRegistrar &&
            other.commandId === this.commandId
        );
    }
}
