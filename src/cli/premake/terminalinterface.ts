import * as vscode from 'vscode';
import { PremakeCliTerminal } from "./terminal";

export class PremakeTerminalInterface {
    private static cliTerminal: PremakeCliTerminal | undefined;

    /**
     * Initializes the ManagerCliTerminal instance if not already created.
     * Should be called during extension activation.
     */
    public static initialize(context: vscode.ExtensionContext): void {
        if (!this.cliTerminal) {
            this.cliTerminal = new PremakeCliTerminal(context);
        }
    }

    /**
     * Opens the terminal.
     */
    public static openInteractive(): void {
        this.ensureInitialized();
        this.cliTerminal!.openTerminal();
    }

    /**
     * This function will throw an error when the cli terminal is not valid.
     */
    private static ensureInitialized(): void {
        if (!this.cliTerminal) {
            throw new Error('TerminalInterface not initialized. Call PremakeTerminalInterface.initialize(context) first.');
        }
    }

    public static launchPremakeCommand(action: string, options: string[] | undefined, file: string | undefined): vscode.Terminal | undefined {
        const args: string[] = [action];

        if (file) {
            args.push(`--file=${file}`);
        }

        if (options) {
            args.push(...options);
        }

        return this.cliTerminal?.executeCommand(`premake5 ${args.reduce((arg) => ` ${arg}`)}`);
    }

    public static close() {
        this.cliTerminal?.closeTerminal();
    }
}