import fs from 'fs';
import { parse as luaParse } from 'lua-json';
import { project } from './premake5/project';
import { premakeWorkspace } from './premake5/workspace';

//interfaces for your JSON structure
interface WorkspaceJSON {
    name: string;
    projects?: ProjectJSON[];
}

interface ProjectJSON {
    name: string;
    properties: any;
}

interface PremakeFileJSON {
    workspace: WorkspaceJSON;
}

export class projectParser { 
    static parsePremakeFile(filePath: string): premakeWorkspace { 
        const luaScript = fs.readFileSync(filePath, 'utf-8'); 
        const jsonData = luaParse(luaScript) as PremakeFileJSON; // Use type assertion

        if (!jsonData.workspace) {
            throw new Error("No workspace found in the premake file"); 
        } 

        const _workspace = new premakeWorkspace(jsonData.workspace.name); 

        if (jsonData.workspace.projects) { 
            jsonData.workspace.projects.forEach((projectData: ProjectJSON) => { 
                const _project = new project(projectData.name, projectData.properties); 
                _workspace.addProject(_project); 
            });
        } 
        
        return _workspace; 
    } 
}
