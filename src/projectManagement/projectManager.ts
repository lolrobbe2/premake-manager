import { premakeWorkspace } from "./premake5/workspace";
import { projectParser } from "./projectParser";

export class projectManager {
    static workspace: premakeWorkspace | undefined;

    static get workspaceLoaded(): boolean {return this.workspace !== undefined;}
    static loadWorkspace(workspace: string): void {
        this.workspace = projectParser.parsePremakeFile(workspace);
    }
}