import { Prompt } from "utils/prompt-utils";
import * as vscode from "vscode";
import { CommandConstructor } from "./command-manager";
import { CommandRegistrar } from "./command-registrar";

export class CommandGroup extends CommandRegistrar {
  private readonly commands: CommandRegistrar[] = [];

  constructor(
    context: vscode.ExtensionContext,
    register: boolean,
    commandId: string,
    name: string,
  ) {
    super(context, register, commandId, name);
  }

  /**
   * Register a subcommand under this group
   */
  public addInstance(command: CommandRegistrar): void {
    this.commands.push(command);
  }

  /**
   * Adds multiple commands by constructing them with the shared context.
   * @param ctors An array of class constructors of CommandRegistrar subclasses.
   * @returns An array of instantiated commands.
   */
  public async addMultiple<T extends CommandRegistrar[]>(ctors: {
    [K in keyof T]: CommandConstructor<T[K]>;
  }): Promise<T> {
    // 1. Create an array of Promises by calling this.add for each constructor
    const promises = ctors.map((ctor) => this.add(ctor));

    // 2. Wait for all additions to complete in parallel
    const results = await Promise.all(promises);

    return results as unknown as T;
  }

  /**
   * Adds a command by constructing it with the shared context.
   * @param ctor The class constructor of a CommandRegistrar.
   * @returns The instantiated command.
   */
  public add<T extends CommandRegistrar>(ctor: CommandConstructor<T>): T {
    const instance: CommandRegistrar = new ctor(this.context, true);
    this.addInstance(instance);
    return instance as T;
  }

  /**
   * List all commands in this group
   */
  public listCommands(): { id: string; name: string }[] {
    return this.commands.map((cmd) => ({
      id: cmd.id,
      name: cmd.commandName,
    }));
  }

  /**
   * Execute group command – e.g., show QuickPick menu
   */
  protected async execute(): Promise<void> {
    const selection = await Prompt.Select(
      this.commands.map((c) => ({
        label: c.commandName,
        description: c.commandDescription,
      })),
      `Select a command in group: ${this.name}`,
    );

    if (selection) {
      const cmd = this.commands.find((c) => c.commandName === selection.label);
      if (cmd) {
        await vscode.commands.executeCommand(cmd.id);
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
