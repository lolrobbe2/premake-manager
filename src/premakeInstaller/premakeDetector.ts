import * as vscode from 'vscode';

import chokidar, { FSWatcher } from 'chokidar';
import * as fs from 'fs/promises';
import * as path from 'path';

import { projectManager } from 'projectManagement/projectManager.js';
import * as utils from '../utils/utils.js';
import { PremakeVersionManager } from './premakeVersionManger.js';

/**
 * @brief static class that watches for file changes and tries to find a premake5.lua file
 */
export class PremakeWatcher {
    static readonly targetFile: string = 'premake5.lua';
    private static watcher: FSWatcher = chokidar.watch('.', {
        ignored: /(^|[\/\\])\../, // Ignore dotfiles
        persistent: true,
    });

    // Method to register the watcher
    public static async registerWatcher(): Promise<void> {
        const filePath = path.join(utils.VSCodeUtils.getWorkspaceFolder(), PremakeWatcher.targetFile);
        await PremakeWatcher.checkWorkspaceAvailable(filePath);
        PremakeWatcher.watcher.on('add', PremakeWatcher.onFileAdded);
        this.watcher.on('change',() => projectManager.reload());
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
    public static addFileForWatching(filePath: string): void {
        this.watcher.add(filePath);
    }
    // Method to execute logic when the file is detected
    private static async runScript(): Promise<void> {
        const filePath = path.join(utils.VSCodeUtils.getWorkspaceFolder(), PremakeWatcher.targetFile);
        await projectManager.loadWorkspace(filePath);
        await PremakeWatcher.versionCheck();
    }

   

    private static async versionCheck() {
        if (!PremakeVersionManager.isVersionSet()) {
            const result = await vscode.window.showInformationMessage(
                'Premake version is not set. Do you want to set Premake version?',
                'Yes', 'No'
            );

            if (result === 'Yes') {
                await PremakeVersionManager.installPremakePicker();
            }

        } else {
            const version: string = await PremakeVersionManager.getVersion();
            if (!await PremakeVersionManager.isVersionReleaseInstalled(version)) {
                const installResult = await vscode.window.showInformationMessage(
                    'Premake version is not installed for selected release. Do you want to install it?',
                    'Yes', 'No'
                );
                if (installResult === 'Yes') {
                    await PremakeVersionManager.installPremakeVersion(version);
                }
            }
        }
    }
    static async checkWorkspaceAvailable(filePath: string) {
        console.log(filePath);
        try {
            await fs.access(filePath);
            await PremakeWatcher.runScript(); // Trigger the action if the file is found
        }
        catch (error: any) 
        {
            console.log(error);
            console.log("no premake5.lua workspace found");
        }
    }
}


