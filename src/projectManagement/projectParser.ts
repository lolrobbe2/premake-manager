import fs from 'fs';
import * as luaparse from 'luaparse';
import { project } from './premake5/project';
import { premakeWorkspace } from './premake5/workspace';

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
    left: { type: string; name: string };
    right: { type: string; value: any };
}

function isWorkspaceNode(node: any): node is WorkspaceNode {
    return node.type === 'StringCallExpression' && node.base && node.base.type === 'Identifier' && node.base.name === 'workspace' && node.argument.type === 'StringLiteral';
}

function isProjectNode(node: any): node is ProjectNode {
    return node.type === 'StringCallExpression' && node.base && node.base.type === 'Identifier' && node.base.name === 'project' && node.argument.type === 'StringLiteral';
}

function isParameterNode(node: any): node is ParameterNode {
    return node.type === 'AssignmentStatement' && node.left && node.left.type === 'Identifier' && node.right;
}

function traverseAst(node: any, workspaces: premakeWorkspace[], currentWorkspace: { workspace: premakeWorkspace | null }, currentProject: { project: project | null }) {
    if (isWorkspaceNode(node)) {
        // Add the previous workspace to the list if it exists
        if (currentWorkspace.workspace) {
            workspaces.push(currentWorkspace.workspace);
        }
        // Create a new workspace
        const workspaceName = node.argument.value || node.argument.raw;
        currentWorkspace.workspace = new premakeWorkspace(workspaceName);
        currentProject.project = null; // Reset the current project
    }

    if (isProjectNode(node)) {
        // Add the current project to the current workspace
        if (currentWorkspace.workspace && currentProject.project) {
            currentWorkspace.workspace.addProject(currentProject.project);
        }
        // Create a new project
        const projectName = node.argument.value || node.argument.raw;
        currentProject.project = new project(projectName, {});
    }

    if (isParameterNode(node)) {
        // Add the parameter to the current project or workspace
        const parameterName = node.left.name;
        const parameterValue = node.right.value;

        if (currentProject.project) {
            (currentProject.project as any)[parameterName] = parameterValue;
        } else if (currentWorkspace.workspace) {
            (currentWorkspace.workspace as any)[parameterName] = parameterValue;
        }
    }

    for (const key in node) {
        if (node[key] && typeof node[key] === 'object') {
            traverseAst(node[key], workspaces, currentWorkspace, currentProject);
        }
    }
}

export class ProjectParser {
    static parsePremakeFile(filePath: string): premakeWorkspace[] {
        const luaScript = fs.readFileSync(filePath, 'utf-8');

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

        traverseAst(ast, workspaces, currentWorkspace, currentProject);

        // Add the last workspace to the list if it exists
        if (currentWorkspace.workspace) {
            workspaces.push(currentWorkspace.workspace);
        }

        return workspaces;
    }
}
