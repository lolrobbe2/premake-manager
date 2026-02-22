// 1. Create a const object (The "Logic")
export const RepoSearchType = {
    UserName: "UserName",
    RepoName: "RepoName",
    Tag: "Tag",
    Recent: "Recent"
} as const;

// 2. Create a type from that object (The "Erasable Syntax")
export type RepoSearchType = typeof RepoSearchType[keyof typeof RepoSearchType];

export interface RegistryRepo {
    userName: string;
    repoName: string;
    tags: string[];
    createdAt: string;
    isLib: boolean;
    repoUrl: string;
    repoMainReadme: string;
    repoMasterReadme: string;
    apiUrl: string;
}

// ... the rest of your ModuleService class stays the same
// If in dev, use relative path (proxied). If in prod, use the real URL.
const isDev = window.location.hostname === 'localhost';
const BASE_URI = isDev ? '' : 'https://premake-registry-ywxg.onrender.com/';

// Your fetch call becomes:
export class ModuleService {
    /**
     * Search modules from the API
     */
    static async getModules(type: RepoSearchType, value: string = "", page: number = 0): Promise<RegistryRepo[]> {
        const params = new URLSearchParams({
            type: type,
            value: value,
            page: String(page)
        });

        const response = await fetch(`${BASE_URI}api/UserRepositories/search?${params.toString()}`, {
            headers: { "Accept": "application/json" }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status}`);
        }

        const data: RegistryRepo[] = await response.json();
        // Filter out libraries as requested in your previous logic
        return data.filter((repo) => !repo.isLib);
    }

    /**
     * Helper to get the default GitHub icon path
     */
    static getIconUri(repo: RegistryRepo): string {
        return `https://raw.githubusercontent.com/${repo.userName}/${repo.repoName}/main/icon.svg`;
    }
}