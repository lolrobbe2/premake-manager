/**
 * @brief static class that watches for file changes and tries to find a premake5.lua file
 */
export declare class PremakeWatcher {
    private static readonly targetFile;
    private static watcher;
    static registerWatcher(): void;
    static unregisterWatcher(): Promise<void>;
    private static onFileAdded;
    private static runScript;
}
