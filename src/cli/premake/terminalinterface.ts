import { PremakeCliTerminal } from "./terminal";
import * as vscode from 'vscode';

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
}