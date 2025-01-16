import { PremakeFile } from "./premake5/premakeFile";
import { ProjectParser } from "./projectParser";

export class projectManager {
    static premakeFile: PremakeFile | undefined;
    static get premakeFileLoaded(): boolean {return this.premakeFile !== undefined;}
    static loadWorkspace(workspace: string): void {
        this.premakeFile = ProjectParser.parsePremakeFile(workspace);
    }
}