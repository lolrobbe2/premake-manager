export enum RepoSearchType {
    UserName = "UserName",
    RepoName = "RepoName",
    Tag = "Tag",
    Recent = "Recent"
}

export interface RegistryRepo {
    userName: string;
    repoName: string;
    tags: string[];
    createdAt: string; // or Date if you parse it
    isLib: boolean;
    repoUrl: string;
    repoReadme: string;
    apiUrl: string;
}

class RepositoryResolver {
    /**
     * Search modules from the API
     * @param type Search type (UserName, RepoName, Tag, Recent)
     * @param value Query string for search
     * @param page Page number (default 0)
     * @returns Array of RegistryRepo
     */
    static async getRepositories(type: RepoSearchType, value: string = "", page: number = 0): Promise<RegistryRepo[]> {
        const params = new URLSearchParams({
            type: type,
            value: value,
            page: page.toString()
        });

        const response = await fetch(`${ModuleResolver.baseUri}api/UserRepositories/search?${params.toString()}`, {
            headers: {
                "Accept": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch modules: ${response.status} ${response.statusText}`);
        }

        const data: RegistryRepo[] = await response.json() as RegistryRepo[];
        return data;
    }
}

export default class ModuleResolver {
    static baseUri = "https://premake-registry.onrender.com/";

    /**
     * Search modules from the API
     * @param type Search type (UserName, RepoName, Tag, Recent)
     * @param value Query string for search
     * @param page Page number (default 0)
     * @returns Array of RegistryRepo
     */
    static async getModules(type: RepoSearchType, value: string = "", page: number = 0): Promise<RegistryRepo[]> {
        return (await RepositoryResolver.getRepositories(type, value, page)).filter((repo) => !repo.isLib);
    }
}
