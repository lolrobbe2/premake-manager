import { premakeWorkspace } from "./premake5/workspace";
import { ProjectParser } from "./projectParser";

export class projectManager {
    static workspaces: premakeWorkspace[];

    static get workspaceLoaded(): boolean {return this.workspaces.length > 0;}
    static loadWorkspace(workspace: string): void {
        this.workspaces = ProjectParser.parsePremakeFile(workspace);
    }
}