import fs from 'fs';
import * as luaparse from 'luaparse';
import path from 'path';
import { VSCodeUtils } from 'utils/utils';
import { project } from '../premake5/project';
import { premakeWorkspace } from '../premake5/workspace';
import { workspaceFile } from './workspaceFile';

interface WorkspaceNode {
    type: string;
    base: { type: string; name: string };
    argument: { type: string; value: string | null; raw: string };
}

interface ProjectNode {
    type: string;
    base: { type: string; name: string };
    argument: { type: string; value: string | null; raw: string };
}

interface ParameterNode {
    type: string;
    base: { type: string; name: string };
    argument: { type: string; value: string | null; raw: string };
}

interface GroupNode {
    type: string;
    base: { type: string; name: string };
    argument: { type: string; value: string | null; raw: string };
}

interface TableCallNode {
    type: string;
    key: { type: string; name: string };
    base: { type: string; name: string };
    arguments: any;
}

function isWorkspaceNode(node: any): node is WorkspaceNode {
    return node.type === 'StringCallExpression' && node.base && node.base.type === 'Identifier' && node.base.name === 'workspace' && node.argument.type === 'StringLiteral';
}

function isProjectNode(node: any): node is ProjectNode {
    return node.type === 'StringCallExpression' && node.base && node.base.type === 'Identifier' && node.base.name === 'project' && node.argument.type === 'StringLiteral';
}

function isParameterNode(node: any): node is ParameterNode {
    return node.type === 'StringCallExpression' && node.base && node.base.type === 'Identifier' && node.base.name !== 'include';
}

function isIncludeNode(node: any): node is ParameterNode {
    return node.type === 'StringCallExpression' && node.base && node.base.type === 'Identifier' && node.base.name === 'include';
}

function isGroupNode(node: any): node is GroupNode {
    return node.type === 'StringCallExpression' && node.base && node.base.type === 'Identifier' && node.base.name === 'group';
}

function isTableCallSingleNode(node: any): node is TableCallNode {
    return node.type === 'TableCallExpression' && node.key && node.key.type === 'Identifier';
}

function isTableCallMultiNode(node: any): node is TableCallNode {
    return node.type === 'TableCallExpression' && node.base && node.base.type === 'Identifier';
}

type PropertyValue = string | { key: string, value: string }[] | string[];

function handleWorkspaceNode(node: WorkspaceNode, workspaces: premakeWorkspace[], currentWorkspace: { workspace: premakeWorkspace | null }, currentProject: { project: project | null }) {
    if (currentWorkspace.workspace) {
        workspaces.push(currentWorkspace.workspace);
    }
    const workspaceName = (node.argument.value || node.argument.raw).replace(/"/g, '');
    currentWorkspace.workspace = new premakeWorkspace(workspaceName);
    currentProject.project = null;
}

function handleProjectNode(node: ProjectNode, currentWorkspace: { workspace: premakeWorkspace | null }, currentProject: { project: project | null },filePath:string) {
    if (currentWorkspace.workspace && currentProject.project) {
        currentWorkspace.workspace.addProject(currentProject.project);
    }
    const projectName = (node.argument.value || node.argument.raw).replace(/"/g, '');
    currentProject.project = new project(projectName, [],ProjectParser.currentGroup,filePath);
}

function handleIncludeNode(node: ParameterNode, currentWorkspace: { workspace: premakeWorkspace | null }, dependencies: string[], filePath: string) {
    const includePath = (node.argument.value || node.argument.raw).replace(/"/g, '');
    const completePath = path.join(filePath, includePath);
    if (currentWorkspace.workspace) {
        currentWorkspace.workspace.dependencies.push(completePath);

        const fullPath = path.resolve(path.join(VSCodeUtils.getWorkspaceFolder(),completePath));
        if (fs.existsSync(fullPath) && fs.lstatSync(fullPath).isDirectory()) {
            ProjectParser.resolveFolder(currentWorkspace.workspace, completePath);
        } else {
            ProjectParser.resolveProjectFile(currentWorkspace.workspace, completePath);
        }
        
    } else {
        dependencies.push(completePath);
        const fullPath = path.resolve(path.join(VSCodeUtils.getWorkspaceFolder(),completePath));
        ProjectParser.resolveWorkspaceFile(fullPath);
    }
}

function handleTableCallMultiNode(node: TableCallNode, currentWorkspace: { workspace: premakeWorkspace | null }, currentProject: { project: project | null }, rootProperties: { key: string, value: PropertyValue }[]) {
    const tableFields = node.arguments.fields;
    const combinedFields: { key: string, value: string }[] = tableFields
        .filter((field: any) => field.value.type === 'StringLiteral' && field.type !== 'TableValue')
        .map((field: any) => {
            const parameterKey = (field.key.name || field.key.value).replace(/"/g, '');
            const parameterValue = (field.value.value || field.value.raw).replace(/"/g, '');
            return { key: parameterKey, value: parameterValue };
        }
    );


    const parameterName = (node.base.name || node.key.name).replace(/"/g, '');
    if (currentProject.project) {
        currentProject.project.properties.push({ key: parameterName, value: combinedFields });
    } else if (currentWorkspace.workspace) {
        currentWorkspace.workspace.properties.push({ key: parameterName, value: combinedFields });
    } else {
        rootProperties.push({ key: parameterName, value: combinedFields });
    }
}

function handleTableCallSingleNode(node: TableCallNode, currentWorkspace: { workspace: premakeWorkspace | null }, currentProject: { project: project | null }, rootProperties: { key: string, value: PropertyValue }[]) {
    const parameterName = (node.base.name || node.key.name).replace(/"/g, '');
    const parameterValue = (node.arguments.value || node.arguments.raw).replace(/"/g, '');
    if (currentProject.project) {
        currentProject.project.properties.push({ key: parameterName, value: parameterValue });
    } else if (currentWorkspace.workspace) {
        currentWorkspace.workspace.properties.push({ key: parameterName, value: parameterValue });
    } else {
        rootProperties.push({ key: parameterName, value: parameterValue });
    }
}

function handleParameterNode(node: ParameterNode, currentWorkspace: { workspace: premakeWorkspace | null }, currentProject: { project: project | null }, rootProperties: { key: string, value: PropertyValue }[]) {
    const parameterName = node.base.name.replace(/"/g, '');
    const parameterValue = (node.argument.value || node.argument.raw).replace(/"/g, '');
    if (currentProject.project) {
        currentProject.project.properties.push({ key: parameterName, value: parameterValue });
    } else if (currentWorkspace.workspace) {
        currentWorkspace.workspace.properties.push({ key: parameterName, value: parameterValue });
    } else {
        rootProperties.push({ key: parameterName, value: parameterValue });
    }
}

function handleGroupNode(node: GroupNode, currentWorkspace: { workspace: premakeWorkspace | null }, currentProject: { project: project | null }, rootProperties: { key: string, value: PropertyValue }[]) {
    const parameterName = node.base.name.replace(/"/g, '');
    const parameterValue = (node.argument.value || node.argument.raw).replace(/"/g, '');
    ProjectParser.currentGroup = parameterValue;
}

function traverseRootAst(node: any, workspaces: premakeWorkspace[], currentWorkspace: { workspace: premakeWorkspace | null }, currentProject: { project: project | null }, dependencies: string[], rootProperties: { key: string, value: PropertyValue }[],filePath:string = "") {
    if (isWorkspaceNode(node)) {
        handleWorkspaceNode(node, workspaces, currentWorkspace, currentProject);
    } else if (isProjectNode(node)) {
        handleProjectNode(node, currentWorkspace, currentProject,filePath);
    } else if (isIncludeNode(node)) {
        handleIncludeNode(node, currentWorkspace, dependencies,filePath);
    } else if (isTableCallMultiNode(node)) {
        handleTableCallMultiNode(node, currentWorkspace, currentProject, rootProperties);
    } else if (isTableCallSingleNode(node)) {
        handleTableCallSingleNode(node, currentWorkspace, currentProject, rootProperties);
    } else if(isGroupNode(node)) {
        handleGroupNode(node, currentWorkspace,currentProject,rootProperties);
    } else if (isParameterNode(node)) {
        handleParameterNode(node, currentWorkspace, currentProject, rootProperties);
    } else {
        for (const key in node) {
            if (node[key] && typeof node[key] === 'object') {
                try {
                    traverseRootAst(node[key], workspaces, currentWorkspace, currentProject, dependencies, rootProperties,filePath);
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
}

function traverseProjectAst(node: any, currentWorkspace: { workspace: premakeWorkspace | null },currentProject: { project: project | null },filePath:string){
    if (isWorkspaceNode(node)) {
        handleWorkspaceNode(node,[], currentWorkspace, currentProject);
    } else if (isProjectNode(node)) {
        handleProjectNode(node, currentWorkspace, currentProject,filePath);
    } else if (isIncludeNode(node)) {
        handleIncludeNode(node, currentWorkspace, [],"");
    } else if (isTableCallMultiNode(node)) {
        handleTableCallMultiNode(node, currentWorkspace, currentProject, []);
    } else if (isTableCallSingleNode(node)) {
        handleTableCallSingleNode(node, currentWorkspace, currentProject, []);
    } else if(isGroupNode(node)) {
        handleGroupNode(node, currentWorkspace,currentProject,[]);
    } else if (isParameterNode(node)) {
        handleParameterNode(node, currentWorkspace, currentProject, []);
    } else {
        for (const key in node) {
            if (node[key] && typeof node[key] === 'object') {
                try {
                    traverseProjectAst(node[key], currentWorkspace, currentProject,filePath);
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
}

export class ProjectParser {
    static currentGroup = "";
    static markedDependencies:string[] = []
    /**
     * reolve a premake.lua script wich should contain a workspace after all top level dependencies have been resolved
     */
    static resolveWorkspaceFile(filePath:string) : workspaceFile
    {
        if(this.markedDependencies.includes(path.isAbsolute(filePath) ? filePath : path.join(VSCodeUtils.getWorkspaceFolder(),filePath))) { return new workspaceFile([],[],[]); }
        const luaScript = fs.readFileSync(path.isAbsolute(filePath) ? filePath : path.join(VSCodeUtils.getWorkspaceFolder(),filePath), 'utf-8');

        this.markedDependencies.push(path.isAbsolute(filePath) ? filePath : path.join(VSCodeUtils.getWorkspaceFolder(),filePath));
        let ast: any;
        try {
            ast = luaparse.parse(luaScript);
        } catch (error) {
            console.error("Error parsing Lua script:", error);
            throw new Error("Failed to parse Premake file. Ensure the script is valid Lua.");
        }
        const workspaces: premakeWorkspace[] = [];
        const currentWorkspace = { workspace: null as premakeWorkspace | null };
        const currentProject = { project: null as project | null };
        const dependencies: string[] = [];
        const rootProperties: { key: string, value: PropertyValue }[] = [];
        try {
            traverseRootAst(ast, workspaces, currentWorkspace, currentProject, dependencies, rootProperties, fs.lstatSync(filePath).isDirectory() ? filePath : path.relative(VSCodeUtils.getWorkspaceFolder(),path.dirname(filePath)));

        } catch (error) {
            console.error(error);
        }

        if (currentWorkspace.workspace) {
            workspaces.push(currentWorkspace.workspace);
        }
        workspaces.forEach(workspace => workspace);
        workspaces.forEach(workspace => this.resolveWorkspaceDependencies(workspace));

        let resolvedRootWorkspaces: workspaceFile[] = workspaces.map(workspace =>  this.resolveRootDependencies(dependencies)) ;
        resolvedRootWorkspaces.push(new workspaceFile(workspaces, dependencies, rootProperties));
        return resolvedRootWorkspaces.reduce((acc, curr) => acc.concatenate(curr));
    }
    static resolveFolder(workspace: premakeWorkspace, filePath: string){
        if(workspace.markedDependencies.includes(filePath)){ return; }

        const luaScript = fs.readFileSync(path.join(VSCodeUtils.getWorkspaceFolder(),filePath,'premake5.lua'), 'utf-8');

        let ast: any;
        try {
            ast = luaparse.parse(luaScript);
        } catch (error) {
            console.error("Error parsing Lua script:", error);
            throw new Error("Failed to parse Premake file. Ensure the script is valid Lua.");
        }
        const workspaces: premakeWorkspace[] = [];
        const currentWorkspace = { workspace: null as premakeWorkspace | null };
        currentWorkspace.workspace = workspace;
        currentWorkspace.workspace.markedDependencies.push(filePath);
        const currentProject = { project: null as project | null };
        const dependencies: string[] = [];
        const rootProperties: { key: string, value: PropertyValue }[] = [];
        try {
            traverseRootAst(ast, workspaces, currentWorkspace, currentProject, dependencies, rootProperties,filePath);

        } catch (error) {
            console.error(error);
        }
        
        if (currentWorkspace.workspace) {
            workspaces.push(currentWorkspace.workspace);
        }
        
        workspaces.forEach(workspace => workspace);
        workspaces.forEach(workspace => this.resolveWorkspaceDependencies(workspace));

        let resolvedRootWorkspaces: workspaceFile[] = workspaces.map(workspace =>  this.resolveRootDependencies(dependencies)) ;
        resolvedRootWorkspaces.push(new workspaceFile(workspaces, dependencies, rootProperties));
        return resolvedRootWorkspaces.reduce((acc, curr) => acc.concatenate(curr));
    }
    /**
     * resolves external files this expects only projects to be found in that file
     */
    static resolveProjectFile(currentWorkspace: premakeWorkspace, filePath: string){
        if(currentWorkspace.markedDependencies.includes(filePath)){ return; }
        currentWorkspace.markedDependencies.push(filePath);
        const luaScript = fs.readFileSync(path.join(VSCodeUtils.getWorkspaceFolder(),filePath), 'utf-8');

        let ast: any;
        try {
            ast = luaparse.parse(luaScript);
        } catch (error) {
            console.error("Error parsing project Lua script:", error);
            throw new Error("Failed to parse project premake file. Ensure the script is valid Lua.");
        }
        const _currentWorkspace = { workspace: currentWorkspace as premakeWorkspace | null };
        const currentProject = { project: null as project | null };

        traverseProjectAst(ast,_currentWorkspace,currentProject,filePath);
        
        if (currentProject.project) {
            _currentWorkspace.workspace?.addProject(currentProject.project);
        }
    }

    static resolveRootDependencies(dependencies:string[]): workspaceFile {
        const workspaces: workspaceFile[] = dependencies.map(rootDependency => this.resolveWorkspaceFile(rootDependency));
        if (workspaces.length === 0) {
            return new workspaceFile([], [], []);
        }
        return workspaces.reduce((acc, curr) => acc.concatenate(curr));
    }



    static resolveWorkspaceDependencies(currentWorkspace: premakeWorkspace) {
        currentWorkspace.dependencies.forEach(workspaceDependency => {
            const fullPath = path.resolve(path.join(VSCodeUtils.getWorkspaceFolder(),workspaceDependency));
            if (fs.existsSync(fullPath) && fs.lstatSync(fullPath).isDirectory()) {
                this.resolveFolder(currentWorkspace, workspaceDependency);
            } else {
                this.resolveProjectFile(currentWorkspace, workspaceDependency);
            }
        });
    }

}
