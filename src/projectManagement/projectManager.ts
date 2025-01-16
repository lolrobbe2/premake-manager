import { PremakeFile } from "./premake5/premakeFile";
import { ProjectParser } from "./projectParser";
import { WorkspacesProvider } from "./views/workspacesProvider";

export class projectManager {
    static workspaceProvider: WorkspacesProvider = new WorkspacesProvider(); 
    static premakeFile: PremakeFile | undefined;
    static get premakeFileLoaded(): boolean {return this.premakeFile !== undefined;}
    static loadWorkspace(workspace: string): void {
        this.premakeFile = ProjectParser.parsePremakeFile(workspace);
        this.workspaceProvider.setPremakeFile(this.premakeFile);
    }

    static refresh(){
        this.workspaceProvider.refresh();
    }
}