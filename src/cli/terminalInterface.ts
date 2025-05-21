import * as vscode from 'vscode';
import { PremakeCliTerminal } from './terminal';

export class TerminalInterface {
    private static cliTerminal: PremakeCliTerminal | undefined;
//#region init
    /**
     * Initializes the PremakeCliTerminal instance if not already created.
     * Should be called during extension activation.
     */
    public static initialize(context: vscode.ExtensionContext): void {
        if (!this.cliTerminal) {
            this.cliTerminal = new PremakeCliTerminal(context);
        }
    }

    /**
     * Opens the interactive terminal (with --interactive flag).
     */
    public static openInteractive(): void {
        this.ensureInitialized();
        this.cliTerminal!.openTerminal(true);
    }

    /**
     * Returns the current terminal instance.
     */
    public static getTerminal(): vscode.Terminal | undefined {
        this.ensureInitialized();
        return this.cliTerminal!.getTerminal();
    }

    /**
     * Sends a command to the terminal.
     * @param command Command string to send
     */
    public static sendCommand(command: string): void {
        this.ensureInitialized();
        this.cliTerminal!.executeCommand(command);
    }

    private static ensureInitialized(): void {
        if (!this.cliTerminal) {
            throw new Error('TerminalInterface not initialized. Call TerminalInterface.initialize(context) first.');
        }
    }
//#endregion

//#region interface
    public static setVersion(tag: String | undefined)
    {
        if(tag !== undefined && tag !== ''){
            this.sendCommand(`version set ${tag}`);
        } else {
            this.sendCommand("version set");
        }
    }
//#endregion
}
