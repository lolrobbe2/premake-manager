import { ProjectParser } from "./parser/projectParser";
import { workspaceFile } from "./parser/workspaceFile";
import { WorkspacesProvider } from "./views/workspacesProvider";

export class projectManager {
    static workspaceProvider: WorkspacesProvider = new WorkspacesProvider(); 
    static premakeFile: workspaceFile | undefined;
    static get premakeFileLoaded(): boolean {return this.premakeFile !== undefined;}
    static loadWorkspace(workspace: string): void {
        this.premakeFile = ProjectParser.resolveWorkspaceFile(workspace);
        this.workspaceProvider.setWorkspaceFile(this.premakeFile);
    }

    static refresh(){
        this.workspaceProvider.refresh();
    }
}