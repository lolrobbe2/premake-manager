import { Release, ReleaseAsset } from '../utils/githubUtils.ts';
export declare class PremakeVersionManager {
    static getVersion(): string;
    static isVersionSet(): boolean;
    static setVersion(version: string): void;
    static handleVersion(): void;
    static showVersionPicker(): Promise<void>;
    private static getAvailableVersionNames;
    static getVersionRelease(version: string): Promise<any | null>;
    static isVersionReleaseInstalled(version: string): Promise<boolean>;
    static getCurrentPlatform(): string;
    static getExecutableExtension(): string;
    static getCurrentAssetForPlatform(release: Release): ReleaseAsset | undefined;
    static premakeVersionExistsInDirectory(releaseName: string): boolean;
    static installPremakeVersion(releaseName: string, platformAsset: ReleaseAsset): Promise<void>;
}
