import { project } from "./project";

export class premakeWorkspace {
    name: string;
    /**all the resolved workspace projects */
    projects: project[];
    /** a list of workspace level properties*/
    properties: { key: string, value: any }[];
    /** a list of external project level dependencies*/
    dependencies: string [];
    markedDependencies: string[];
    filePath: string = "";
    constructor(name: string,properties: { key: string, value: string }[] = []) {
        this.name = name; 
        this.projects = []; 
        this.properties = properties;
        this.dependencies = [];
        this.markedDependencies = [];
    }
    /**adds a project to the workspace */
    addProject(project: project) {
        this.projects.push(project);
    }
    /**returns the worksapce name without \\" */
    get trimmedName(): string { return this.name.replace(/"/g, ''); }
}