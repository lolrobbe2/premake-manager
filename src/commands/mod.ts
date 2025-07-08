import { CommandManager } from './command-manager';
import { ManagerCommandGroup } from './manager-group';
import { EnvironmentAwareTerminal, TerminalCommand } from './terminal-command';



export function register(): void {
    CommandManager.add(TerminalCommand);
    CommandManager.add(EnvironmentAwareTerminal);
    CommandManager.add(ManagerCommandGroup);
}
