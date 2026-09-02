export interface PremakeProject {
    name: string;
    kind: string;
    language: string;
    files: string[];
    links: string[];
}
export interface PremakeWorkspace {
    name: string;
    configurations: string[];
    location: string;
    architecture: string;
    projects: string[];
}