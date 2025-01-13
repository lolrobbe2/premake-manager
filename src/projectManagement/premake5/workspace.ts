import { project } from "./project";

export class workspace {
    name: string; 
    projects: project[]; 
    constructor(name: string) {
        this.name = name; 
        this.projects = []; 
    } 
    addProject(project: project) {
        this.projects.push(project);
    }
}