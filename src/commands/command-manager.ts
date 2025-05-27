import * as vscode from 'vscode';
import { CommandRegistrar } from './command-registrar';

type CommandConstructor<T extends CommandRegistrar> = new (context: vscode.ExtensionContext) => T;

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
        const instance = new ctor(this._context);
        this._commands.add(instance);
        return instance;
    }

    /**
     * Returns all registered command instances.
     */
    public static get commands(): CommandRegistrar[] {
        return Array.from(this._commands);
    }
}
