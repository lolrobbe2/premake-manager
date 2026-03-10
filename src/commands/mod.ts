import { CommandManager } from "./command-manager";
import { DocumentationCommand } from "./docs-command";
import { ManagerCommandGroup } from "./manager-group";
import { EnvironmentAwareTerminal, TerminalCommand } from "./terminal-command";

export async function register(): Promise<void> {
  await Promise.all([
    CommandManager.add(TerminalCommand),
    CommandManager.add(EnvironmentAwareTerminal),
    CommandManager.add(DocumentationCommand),
    CommandManager.add(ManagerCommandGroup),
  ]);
}
