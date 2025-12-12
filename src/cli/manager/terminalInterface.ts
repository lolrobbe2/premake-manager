import * as vscode from 'vscode';
import { ManagerCliTerminal } from './terminal';

export class TerminalInterface {
    private static cliTerminal: ManagerCliTerminal | undefined;
//#region init
    /**
     * Initializes the ManagerCliTerminal instance if not already created.
     * Should be called during extension activation.
     */
    public static initialize(context: vscode.ExtensionContext): void {
        if (!this.cliTerminal) {
            this.cliTerminal = new ManagerCliTerminal(context);
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
//#region VERSION
    public static setVersion(tag: String | undefined)
    {
        if(tag !== undefined && tag !== ''){
            this.sendCommand(`version set ${tag}`);
        } else {
            this.sendCommand("version set");
        }
    }

    public static listReleases(){
        this.sendCommand(`version list --releases`);
    }

    public static listInstalled() {
        this.sendCommand(`version list --installed`);
    }
//#endregion
//#region MODULES
    public static moduleInfo(githubLink: String | undefined) {
        this.sendCommand(`module info ${githubLink}`);
    }

    public static moduleAdd(githubLink: String  | undefined) {
        this.sendCommand(`module add ${githubLink}`);
    }
    
    public static moduleInstall(githubLink: String | undefined) {
        this.sendCommand(`module install ${githubLink}`);
    }

    public static moduleRemove(githubLink: String | undefined) {
        this.sendCommand(`module remove ${githubLink}`);
    }
//#endregion
   public static libraryInfo(githubLink: String | undefined) {
        this.sendCommand(`library info ${githubLink}`);
    }

    public static libraryAdd(githubLink: String  | undefined) {
        this.sendCommand(`library add ${githubLink}`);
    }
    
    public static libraryInstall(githubLink: String | undefined) {
        this.sendCommand(`library install ${githubLink}`);
    }

    public static libraryRemove(githubLink: String | undefined) {
        this.sendCommand(`library remove ${githubLink}`);
    }
//#region LIBRARIES

//#endregion

//#region CONFIG
    public static configSetVersion(tag: String | undefined) {
        if (tag !== undefined && tag !== '') {
            this.sendCommand(`config version${tag}`);
        } else {
            this.sendCommand("config version");
        }
    }

    public static configView()
    {
        this.sendCommand("config view");
    }

    public static configure()
    {
        this.sendCommand("configure");
    }
//#endregion
//#endregion
}
