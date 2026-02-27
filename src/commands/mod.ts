import { CommandManager } from "./command-manager";
import { ManagerCommandGroup } from "./manager-group";
import { EnvironmentAwareTerminal, TerminalCommand } from "./terminal-command";

export async function register(): Promise<void> {
  await Promise.all([
    CommandManager.add(TerminalCommand),
    CommandManager.add(EnvironmentAwareTerminal),
    CommandManager.add(ManagerCommandGroup),
  ]);
}
