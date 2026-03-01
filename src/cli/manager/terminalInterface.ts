import * as vscode from 'vscode';
import { ManagerCliTerminal } from './terminal';

export class TerminalInterface {
    private static cliTerminal: ManagerCliTerminal | undefined;

    private static checkValid(list: (String | undefined)[]): list is string[] {
        return list.every(item =>
            item !== undefined && item.trim().length > 0
        );
    }
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
    public static setVersion(tag: String | undefined) {
        if (tag !== undefined && tag !== '') {
            this.sendCommand(`version set ${tag}`);
        } else {
            this.sendCommand("version set");
        }
    }

    public static listReleases() {
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

    public static moduleAdd(githubLink: String | undefined) {
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

    public static libraryAdd(githubLink: String | undefined) {
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

    public static configView() {
        this.sendCommand("config view");
    }

    public static configure() {
        this.sendCommand("configure");
    }
    //#endregion

    //#region index
    /**
     * create a new common index
     * @param remote remote github url of the repo
     */
    public static indexNew(remote: String | undefined) {
        if (this.checkValid([remote])) {
            this.sendCommand(`index new ${remote}`)
        } else {
            this.sendCommand("index new");
        }
    }
    //#region ADD

    /**
     * Add a library to the local index
     * @param owner the owner of the library (github name)
     * @param repo the owner of the library (github name)
     * @param description the library desciption
     */
    public static indexAddLibrary(owner: String | undefined, repo: String | undefined, description: String | undefined) {
        if (!this.checkValid([owner, repo, description])) {
            this.sendCommand("index add library");
        } else {
            this.sendCommand(`index add library ${owner} ${repo} ${description}`);
        }
    }

    /**
     * Add a library from a github uri to the local index
     * @param uri the uri to add
     */
    public static indexAddUriLibrary(uri: String | undefined) {
        if (!this.checkValid([uri])) {
            this.sendCommand("index add uri library");
        } else {
            this.sendCommand
        }
    }

    /**
     * Add a dependency to a local index library
     * @param githublink The GitHub link of the library or the owner/repo
     * @param owner the owner of the dependency (github name)
     * @param repo the name of the dependency
     * @param range the version range of the dependency
     */
    public static indexAddDependency(githublink: String | undefined, owner: String | undefined, repo: String | undefined, range: String | undefined) {
        if (this.checkValid([githublink, owner, repo, range])) {
            this.sendCommand(`index add dependency ${githublink} ${owner} ${repo} ${range}`);
        } else {
            this.sendCommand("index add dependency");
        }
    }
    //#endregion
    //#endregion
    //#region remotes
    /**
     * Show all the local remotes
     */
    public static remotesView() {
        this.sendCommand("remotes view");
    }
    public static remotesAdd(owner: String | undefined, repo: String | undefined) {
        if (this.checkValid([owner, repo])) {
            this.sendCommand(`remotes add ${owner} ${repo}`)
        } else {
            this.sendCommand("remotes add")
        }
    }

    public static remotesUpdate(force: Boolean | undefined) {
        if (force === true) {
            this.sendCommand(`remotes update True`)
        } else {
            this.sendCommand("remotes update");
        }
    }

    public static remotesRemove(owner: String | undefined, repo: String | undefined){
        if(this.checkValid([owner, repo])){
            this.sendCommand(`remotes remove ${owner} ${repo}`)
        } else {
            this.sendCommand("remotes remove");
        }
    }

    public static remotesReset() {
        this.sendCommand("remotes reset");
    }
    //#endregion
    //#endregion
}
