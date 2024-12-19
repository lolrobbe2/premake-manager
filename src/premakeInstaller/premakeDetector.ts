import chokidar, { FSWatcher } from 'chokidar';
import fs from 'fs';
import * as path from 'path';

import * as utils from '../utils/utils';

/**
 * @brief static class that watches for file changes and tries to find a premake5.lua file
 */
export class PremakeWatcher {
    private static readonly targetFile: string = 'premake5.lua';
    private static watcher: FSWatcher = chokidar.watch('.', {
        ignored: /(^|[\/\\])\../, // Ignore dotfiles
        persistent: true,
    });

    // Method to register the watcher
    public static registerWatcher(): void {
        const filePath = path.join(utils.VSCodeUtils.getWorkspaceFolder(), PremakeWatcher.targetFile);
        if (fs.existsSync(filePath)) {
            console.log(`Existing file found: ${filePath}`);
            PremakeWatcher.runScript();  // Trigger the action if the file is found
        }


        PremakeWatcher.watcher.on('add', PremakeWatcher.onFileAdded);
        console.log('Watcher registered successfully.');
    }

    // Method to unregister the watcher
    public static async unregisterWatcher(): Promise<void> {
        await PremakeWatcher.watcher.close();
        console.log('Watcher unregistered successfully.');
    }

    // Event handler for file addition
    private static onFileAdded(path: string): void {
        if (path.endsWith(PremakeWatcher.targetFile)) {
            console.log(`File ${path} detected! Running the script...`);
            PremakeWatcher.runScript();
        }
    }

    // Method to execute logic when the file is detected
    private static runScript(): void {
        console.log('Running the script...');
        // Add your logic here
    }
}

// Example usage

// Uncomment the following to unregister the watcher after some time (e.g., 10 seconds)
// setTimeout(() => PremakeWatcher.unregisterWatcher(), 10000);
