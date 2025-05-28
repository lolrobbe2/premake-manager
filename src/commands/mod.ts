import { CommandManager } from './command-manager';
import { ManagerCommandGroup } from './manager-group';
import { ModuleCommandGroup } from './module/module-group';
import { TerminalCommand } from './terminal-command';
import { VersionCommandGroup } from './version/version-group';



export function register(): void {
    CommandManager.add(TerminalCommand);
    CommandManager.add(ManagerCommandGroup);
}
