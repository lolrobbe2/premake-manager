export interface PremakeProject {
    name: string;
    kind: string;
    language: string;
    targetdir: Record<string, string>;
    files: string[];
    links: string[];
}
export interface PremakeWorkspace {
    name: string;
    configurations: string[];
    location: string;
    architecture: string;
    debugger: string | undefined;
    projects: string[];
}