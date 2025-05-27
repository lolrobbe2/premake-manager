import * as vscode from 'vscode';
import { CommandRegistrar } from './command-registrar';
import { Prompt } from 'utils/prompt-utils';

export class CommandGroup extends CommandRegistrar {
    private readonly commands: CommandRegistrar[] = [];

    constructor(context: vscode.ExtensionContext, commandId: string, name: string) {
        super(context, commandId, name);
    }

    /**
     * Register a subcommand under this group
     */
    public add(command: CommandRegistrar): void {
        this.commands.push(command);
    }

    /**
     * List all commands in this group
     */
    public listCommands(): { id: string; name: string }[] {
        return this.commands.map(cmd => ({
            id: cmd.id,
            name: cmd.commandName
        }));
    }

    /**
     * Execute group command – e.g., show QuickPick menu
     */
    protected async execute(): Promise<void> {
        const selection = await Prompt.Select(
            this.commands.map(c => ({
                label: c.commandName,
                description: c.commandName
            })),
            `Select a command in group: ${this.name}`
        );

        if (selection) {
            const cmd = this.commands.find(c => c.commandName === selection.description);
            if (cmd) {
                vscode.commands.executeCommand(cmd.id);
            }
        }
    }

    public get count(): number {
        return this.commands.length;
    }

    public forEach(callback: (command: CommandRegistrar) => void): void {
        this.commands.forEach(callback);
    }
}
