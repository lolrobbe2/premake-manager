import fs from 'fs';
import { parse as luaParse } from 'lua-json';
import { project } from './premake5/project';
import { workspace } from './premake5/workspace';

class Parser { 
    static parsePremakeFile(filePath: string): workspace { 
        const luaScript = fs.readFileSync(filePath, 'utf-8'); 
        const jsonData = luaParse(luaScript); 
        if (!jsonData.workspace) {
            throw new Error("No workspace found in the premake file"); 
        } 
        const _workspace = new workspace(jsonData.workspace.name); 
        if (jsonData.workspace.projects) { 
            jsonData.workspace.projects.forEach((projectData: any) => { 
                const _project = new project(projectData.name, projectData.properties); 
                _workspace.addProject(_project); 
            });
        } 
        return _workspace; 
    } 
}
