export interface ReleaseAsset {
    name: string;
    download_link: string;
}
export interface Release {
    name: string | null;
    assets: ReleaseAsset[];
}
export declare class GithubUtils {
    static getRepoUrl(): string;
    static extractRepoInfo(url: string): {
        owner: string;
        repo: string;
    } | null;
    static getReleases(): Promise<Release[]>;
    static getVersionRelease(version: string): Promise<object | undefined>;
}
