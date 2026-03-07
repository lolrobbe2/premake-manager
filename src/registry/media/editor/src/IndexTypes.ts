/**
 * Representation of a library dependency
 */
export interface LibraryDependency {
    /** 
     * Format: <owner>/<repo_name> 
     */
    name: string;

    /**
     * Format: "*", "semver range", or "@" (parent version) 
     */
    version: string;
}
export interface LibraryDependencies {
    libraries: LibraryDependency[];
}

/**
 * Representation of a library item
 */
export interface IndexLibrary {
    name: string;
    description?: string;
}

/**
 * Representation of the common-index yaml
 */
export interface IndexView {
    remote: string;
    libraries: Record<string, IndexLibrary[]>; //indexed by owner
}