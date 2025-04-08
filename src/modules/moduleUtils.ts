
export interface ModuleConfig {
    git?: string;
    version?: string;
    branch?: string;
}
export class ModuleUtility {
    static extractVersion(version: string): string | null {
        // Regular expressions to match "x.x.x" and ">=x.x.x"
        const exactVersionRegex = /^\d+\.\d+\.\d+$/; // Matches "x.x.x"
        const greaterThanVersionRegex = /^>=\d+\.\d+\.\d+$/; // Matches ">=x.x.x"

        if (exactVersionRegex.test(version)) {
            // Match exact version format "x.x.x"
            return version;
        } else if (greaterThanVersionRegex.test(version)) {
            // Match ">=x.x.x" and extract the version number
            return version.slice(2); // Remove the ">=" prefix
        }

        // Return null if no match
        return null;
    }
    static extractRepositoryName(url: string): string | null {
        const regex = /github\.com\/[^\/]+\/([^\/]+)/; // Matches the repository name in the URL
        const match = url.match(regex);
        return match ? match[1] : null; // Returns the repository name or null if not found
    }
}