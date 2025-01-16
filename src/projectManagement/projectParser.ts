import fs from 'fs';
import * as luaparse from 'luaparse';
import { PremakeFile } from './premake5/premakeFile';
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

function isTableCallNode(node: any): node is TableCallNode {
    return node.type === 'TableCallExpression' && node.key && node.key.type === 'Identifier';
}

function traverseAst(node: any, workspaces: premakeWorkspace[], currentWorkspace: { workspace: premakeWorkspace | null }, currentProject: { project: project | null }, dependencies: string[]) {
    if (isWorkspaceNode(node)) {
        // Add the previous workspace to the list if it exists
        if (currentWorkspace.workspace) {
            workspaces.push(currentWorkspace.workspace);
        }
        // Create a new workspace
        const workspaceName = node.argument.value || node.argument.raw;
        currentWorkspace.workspace = new premakeWorkspace(workspaceName);
        currentProject.project = null; // Reset the current project
    } else if (isProjectNode(node)) {
        // Add the current project to the current workspace
        if (currentWorkspace.workspace && currentProject.project) {
            currentWorkspace.workspace.addProject(currentProject.project);
        }
        // Create a new project
        const projectName = node.argument.value || node.argument.raw;
        currentProject.project = new project(projectName, []);
    } else if (isParameterNode(node)) {
        // Add the parameter to the current project or workspace
        const parameterName = node.base.name;
        const parameterValue = node.argument.value || node.argument.raw;

        if (currentProject.project) {
            currentProject.project.properties.push({ key: parameterName, value: parameterValue });
        } else if (currentWorkspace.workspace) {
            currentWorkspace.workspace.properties.push({ key: parameterName, value: parameterValue });
        }
    } else if (isIncludeNode(node)) {
        // Add the include statement to the dependencies array
        const includePath = node.argument.value || node.argument.raw;

        if(currentWorkspace.workspace)
            {currentWorkspace.workspace!.dependencies.push(includePath);}
        else
            {dependencies.push(includePath);}

    } else if (isTableCallNode(node)) {
        // Handle TableCallExpression nodes
        if (node.arguments.fields !== undefined) {
            const tableFields = node.arguments.fields;
            tableFields.forEach((field: any) => {
                const parameterName = node.key.name;
                const parameterValue = field.value.value || field.value.raw;

                if (currentProject.project) {
                    currentProject.project.properties.push({ key: parameterName, value: parameterValue });
                } else if (currentWorkspace.workspace) {
                    currentWorkspace.workspace.properties.push({ key: parameterName, value: parameterValue });
                }
            });
        } else {
            const parameterName = node.base.name;
            const parameterValue = node.arguments.value || node.arguments.raw;
            if (currentProject.project) {
                currentProject.project.properties.push({ key: parameterName, value: parameterValue });
            } else if (currentWorkspace.workspace) {
                currentWorkspace.workspace.properties.push({ key: parameterName, value: parameterValue });
            }
        }
    } else {
        for (const key in node) {
            if (node[key] && typeof node[key] === 'object') {
                try {
                    traverseAst(node[key], workspaces, currentWorkspace, currentProject, dependencies);
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
}

export class ProjectParser {
    static parsePremakeFile(filePath: string): PremakeFile {
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
        const dependencies: string[] = [];

        traverseAst(ast, workspaces, currentWorkspace, currentProject, dependencies);

        // Add the last workspace to the list if it exists
        if (currentWorkspace.workspace) {
            workspaces.push(currentWorkspace.workspace);
        }
        return new PremakeFile(filePath, workspaces, dependencies); // Return premakeFile object
    }
}
