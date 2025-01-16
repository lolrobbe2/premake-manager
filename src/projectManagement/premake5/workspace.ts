import { project } from "./project";

export class premakeWorkspace {
    name: string; 
    projects: project[];
    properties: { key: string, value: string }[];
    constructor(name: string,properties: { key: string, value: string }[] = []) {
        this.name = name; 
        this.projects = []; 
        this.properties = properties;
    } 
    addProject(project: project) {
        this.projects.push(project);
    }
}