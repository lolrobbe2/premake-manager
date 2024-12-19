import * as vscode from 'vscode';

import chokidar, { FSWatcher } from 'chokidar';
import fs from 'fs';
import * as path from 'path';

import * as utils from '../utils/utils';
import { PremakeVersionManager } from './premakeVersionManger';

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
            PremakeWatcher.runScript();  // Trigger the action if the file is found
        }
        PremakeWatcher.watcher.on('add', PremakeWatcher.onFileAdded);
    }

    // Method to unregister the watcher
    public static async unregisterWatcher(): Promise<void> {
        await PremakeWatcher.watcher.close();
    }

    // Event handler for file addition
    private static onFileAdded(path: string): void {
        if (path.endsWith(PremakeWatcher.targetFile)) {
            PremakeWatcher.runScript();
        }
    }

    // Method to execute logic when the file is detected
    private static async runScript(): Promise<void> {
        if(!PremakeVersionManager.isVersionSet()){
             
            const result = await vscode.window.showInformationMessage(
                'Premake version is not set. Do you want to install Premake?',
                'Yes', 'No'
            );

            if(result === 'Yes'){
               await PremakeVersionManager.showVersionPicker();
            }
        
        }
    }
}

// Example usage

// Uncomment the following to unregister the watcher after some time (e.g., 10 seconds)
// setTimeout(() => PremakeWatcher.unregisterWatcher(), 10000);
