import * as vscode from 'vscode';
import { CommandGroup } from './command-group';
import { CommandRegistrar } from './command-registrar';

export type CommandConstructor<T extends CommandRegistrar> = new (context: vscode.ExtensionContext, register: boolean) => T;

export class CommandManager {
    private static readonly _commands: Set<CommandRegistrar> = new Set<CommandRegistrar>();
    private static _context: vscode.ExtensionContext;

    /**
     * Initializes the command manager with the extension context.
     * You must call `add()` manually to register commands.
     */
    public static initialize(context: vscode.ExtensionContext): void {
        this._context = context;
    }

    /**
     * Adds a command by constructing it with the shared context.
     * @param ctor The class constructor of a CommandRegistrar.
     * @returns The instantiated command.
     */
    public static add<T extends CommandRegistrar>(ctor: CommandConstructor<T>): T {
        const instance = new ctor(this._context,true);
        this._commands.add(instance);
        return instance;
    }
    /**
     * Finds a command instance by its command ID.
     */
    public static findById(commandId: string): CommandRegistrar | undefined {
        return [...this._commands].find(cmd => cmd.id === commandId);
    }
    
    /**
     * Creates a CommandGroup, instantiates given command classes, adds them to the group,
     * and registers the group command.
     *
     * @param groupId Command ID for the group
     * @param groupName Display name for the group
     * @param commandCtors Array of command class constructors to instantiate and add
     * @returns The created CommandGroup instance
     */
    public static createCommandGroup(
        groupId: string,
        groupName: string,
        commandCtors: CommandConstructor<CommandRegistrar>[]
    ): CommandGroup {
        const group = new CommandGroup(this._context,true, groupId, groupName);

        for (const ctor of commandCtors) {
            group.add(ctor);
            this._commands.add(new ctor(this._context,true));
        }

        this._commands.add(group);

        return group;
    }

    /**
     * Returns all registered command instances.
     */
    public static get commands(): CommandRegistrar[] {
        return Array.from(this._commands);
    }
}
