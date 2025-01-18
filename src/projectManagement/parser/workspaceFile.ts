import { PropertyValue } from "projectManagement/premake5/project";
import { premakeWorkspace } from "projectManagement/premake5/workspace";

export class workspaceFile {
    private _workspaces: premakeWorkspace[];
    private _dependencies: string[];
    private _rootProperties: { key: string, value: PropertyValue }[];
    constructor(workspaces: premakeWorkspace[], dependencies: string[], rootProperties:{ key: string, value: PropertyValue }[]) {
        this._workspaces = workspaces;
        this._dependencies = dependencies;
        this._rootProperties = rootProperties;
    }
    public concatenate(other: workspaceFile): workspaceFile {
        const concatenatedWorkspaces = this._workspaces.concat(other._workspaces);
        const concatenatedDependencies = this._dependencies.concat(other._dependencies);
        const concatenatedRootProperties = this._rootProperties.concat(other._rootProperties);
        return new workspaceFile(concatenatedWorkspaces, concatenatedDependencies, concatenatedRootProperties);
    }
}