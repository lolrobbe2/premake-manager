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

function handleProjectNode(node: ProjectNode, currentWorkspace: { workspace: premakeWorkspace | null }, currentProject: { project: project | null }) {
    if (currentWorkspace.workspace && currentProject.project) {
        currentWorkspace.workspace.addProject(currentProject.project);
    }
    const projectName = (node.argument.value || node.argument.raw).replace(/"/g, '');
    currentProject.project = new project(projectName, []);
}

function handleIncludeNode(node: ParameterNode, currentWorkspace: { workspace: premakeWorkspace | null }, dependencies: string[]) {
    const includePath = (node.argument.value || node.argument.raw).replace(/"/g, '');

    if (currentWorkspace.workspace) {
        currentWorkspace.workspace.dependencies.push(includePath);
    } else {
        dependencies.push(includePath);
    }
}

function handleTableCallMultiNode(node: TableCallNode, currentWorkspace: { workspace: premakeWorkspace | null }, currentProject: { project: project | null }, rootProperties: { key: string, value: PropertyValue }[]) {
    const tableFields = node.arguments.fields;
    const combinedFields: { key: string, value: string }[] = tableFields.map((field: any) => {
        const parameterKey = (field.key.name || field.key.value).replace(/"/g, '');
        const parameterValue = (field.value.value || field.value.raw).replace(/"/g, '');
        return { key: parameterKey, value: parameterValue };
    });

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

function traverseAst(node: any, workspaces: premakeWorkspace[], currentWorkspace: { workspace: premakeWorkspace | null }, currentProject: { project: project | null }, dependencies: string[], rootProperties: { key: string, value: PropertyValue }[]) {
    if (isWorkspaceNode(node)) {
        handleWorkspaceNode(node, workspaces, currentWorkspace, currentProject);
    } else if (isProjectNode(node)) {
        handleProjectNode(node, currentWorkspace, currentProject);
    } else if (isIncludeNode(node)) {
        handleIncludeNode(node, currentWorkspace, dependencies);
    } else if (isTableCallMultiNode(node)) {
        handleTableCallMultiNode(node, currentWorkspace, currentProject, rootProperties);
    } else if (isTableCallSingleNode(node)) {
        handleTableCallSingleNode(node, currentWorkspace, currentProject, rootProperties);
    } else if (isParameterNode(node)) {
        handleParameterNode(node, currentWorkspace, currentProject, rootProperties);
    } else {
        for (const key in node) {
            if (node[key] && typeof node[key] === 'object') {
                try {
                    traverseAst(node[key], workspaces, currentWorkspace, currentProject, dependencies, rootProperties);
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
        const rootProperties: { key: string, value: PropertyValue }[] = [];

        traverseAst(ast, workspaces, currentWorkspace, currentProject, dependencies, rootProperties);

        if (currentWorkspace.workspace) {
            workspaces.push(currentWorkspace.workspace);
        }

        return new PremakeFile(filePath, workspaces, dependencies, rootProperties);
    }
}
