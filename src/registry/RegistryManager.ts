import * as yaml from 'js-yaml';
import { Prompt } from 'utils/prompt-utils';
import vscode from "vscode";
import { TerminalInterface } from "../cli/manager/terminalInterface";

/**
 * Representation of a library dependency
 */
export interface LibraryDependency {
    /** 
     * Format: <owner>/<repo_name> 
     */
    name: string;

    /**
     * Format: "*", "semver range", or "@" (parent version) 
     */
    version: string;
}
export interface LibraryDependencies {
    libraries: LibraryDependency[];
}

/**
 * Representation of a library item
 */
export interface IndexLibrary {
    name: string;
    description?: string;
}

/**
 * Representation of the common-index yaml
 */
export interface IndexView {
    remote: string;
    libraries: Record<string, IndexLibrary[]>; //indexed by owner
}
/**
 * This class handles editing of a opened common registry
 */
export class RegistryManager {
    private static index: IndexView;
    public static async Open(): Promise<void> {
        const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
        if (!workspaceFolder) {
            Prompt.Error("no workspace is currently open");
            return;
        }

        const fileUri = vscode.Uri.joinPath(workspaceFolder.uri, 'premakeIndex.yml');

        try {
            // 3. Read the file bytes
            const fileData = await vscode.workspace.fs.readFile(fileUri);

            // 4. Convert to string and parse
            const yamlString = Buffer.from(fileData).toString('utf8');
            this.index = yaml.load(yamlString) as IndexView;

            // Validation Check (Optional but recommended)
            if (!this.index || !this.index.remote) {
                Prompt.Error("Invalid premakeIndex.yml structure.");
            }
        } catch (error) {
            // Handle file-not-found or parsing errors silently or via UI
            Prompt.Error("unable to read premakeIndex.yml")
            return;
        }

    }
    public static findByOwner(query: String): IndexLibrary[] {
        if (!this.index || !this.index.libraries) {
            Prompt.Error("Index was not opened");
            return [];
        }

        const matchingOwners = Object.keys(this.index.libraries).filter(owner =>
            owner.toLowerCase().includes(query.toLowerCase())
        );
        return matchingOwners.flatMap(owner => this.index.libraries[owner]);
    }
    public static findByName(query: string): IndexLibrary[] {
        if (!this.index || !this.index.libraries) {
            Prompt.Error("Index was not opened");
            return [];
        }

        const allLibraries = Object.values(this.index.libraries).flat();
        return allLibraries.filter(lib =>
            lib.name.toLowerCase().includes(query.toLowerCase())
        );
    }

    public static IndexAddUriLibrary(githubLink: string) {
        TerminalInterface.indexAddUriLibrary(githubLink);
    }

    public static IndexAddDependency(githublink: String, owner: String, repo: String, range: String){
        TerminalInterface.indexAddDependency(githublink, owner, repo, range);
    }
    
    public static async GetDependencies(fullname: string) :Promise<LibraryDependencies | undefined> {
        const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
        if (!workspaceFolder) {
            Prompt.Error("no workspace is currently open");
            return undefined;
        }

        const fileUri = vscode.Uri.joinPath(workspaceFolder.uri,"libraries",fullname.toLowerCase(),'premakeDependencies.yml');

        try {
            const fileData = await vscode.workspace.fs.readFile(fileUri);

            // 4. Convert to string and parse
            const yamlString = Buffer.from(fileData).toString('utf8');
            const depenendcies = yaml.load(yamlString) as LibraryDependencies;

            // Validation Check (Optional but recommended)
            if (!depenendcies) {
                Prompt.Error("Invalid premakeDependencies.yml structure.");
            }
            return depenendcies;

        } catch (error) {
            // Handle file-not-found or parsing errors silently or via UI
            Prompt.Error("unable to read premakeDependencies.yml")
            return;
        }
    }
    public static async GetDependenciesLib(library: IndexLibrary): Promise<LibraryDependencies | undefined> {
        return await this.GetDependencies(library.name);
    }
}