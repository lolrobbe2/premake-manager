import { project } from "./project";

export class premakeWorkspace {
    name: string; 
    projects: project[];
    properties: { key: string, value: string }[];
    dependencies: string [];
    constructor(name: string,properties: { key: string, value: string }[] = []) {
        this.name = name; 
        this.projects = []; 
        this.properties = properties;
        this.dependencies = [];
    } 
    addProject(project: project) {
        this.projects.push(project);
    }
    get trimmedName(): string { return this.name.replace(/"/g, ''); }
}