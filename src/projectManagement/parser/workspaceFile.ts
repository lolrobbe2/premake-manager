import { action } from "projectManagement/premake5/action";
import { option } from "projectManagement/premake5/option";
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

    public getProperties(key: string): PropertyValue | undefined {
        const properties = this._rootProperties.filter(property => property.key === key).map(property => property.value);
        return properties.length > 0 ? properties : undefined;
    }
    public get workspaces(): premakeWorkspace[] { return this._workspaces; }
    public get rootProperties(): { key: string, value: PropertyValue }[] { return this._rootProperties; }

    public get options(): option[] { 
        const options = this.getProperties("newoption") ?? [];
        return options.map((property: any[]) => {
            const values = Array.isArray(property) && typeof property[0] === 'object' ? property : [];
            const trigger = values.find(v => v.key === 'trigger')?.value || '';
            const description = values.find(v => v.key === 'description')?.value || '';
            return trigger && description ? new option(trigger, description) : null;
        })
        .filter(Boolean) as option[];
    }

    public get actions(): action[] {
        const properties = this.getProperties("newaction") || [];
        return properties.map((property: PropertyValue[]) => {
            const values = Array.isArray(property) && typeof property[0] === 'object' ? property: [];
            const trigger = values.find(v => v.key === 'trigger')?.value || '';
            const description = values.find(v => v.key === 'description')?.value || '';
            return trigger && description ? new action(trigger, description) : null;
        }).filter(Boolean) as action[];
    }
}