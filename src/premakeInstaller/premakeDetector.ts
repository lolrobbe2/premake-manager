import * as vscode from 'vscode';

import chokidar, { FSWatcher } from 'chokidar';
import * as fs from 'fs/promises';
import * as path from 'path';

import Configuration from 'premakeConfig/configuration.js';
import { projectManager } from 'projectManagement/projectManager.js';
import * as utils from '../utils/utils.js';
import { PremakeVersionManager } from './premakeVersionManger.js';

/**
 * @brief static class that watches for file changes and tries to find a premake5.lua file
 */
export class PremakeWatcher {
    static readonly targetFile: string = 'premake5.lua';
    static readonly targetConfigFile: string = 'premakeConfig.yml';
    private static watcher: FSWatcher = chokidar.watch('.', {
        ignored: /(^|[\/\\])\../, // Ignore dotfiles
        persistent: true,
    });

    /**
     * Registers the filewatcher to check if a premake5.lua / premakeConfig.yml has been created
     */
    public static async registerWatcher(): Promise<void> {
        const filePath = path.join(utils.VSCodeUtils.getWorkspaceFolder(), PremakeWatcher.targetFile);
        await PremakeWatcher.checkWorkspaceAvailable(filePath);

        const configFilePath = path.join(utils.VSCodeUtils.getWorkspaceFolder(), PremakeWatcher.targetConfigFile);
        await PremakeWatcher.checkConfigAvailable(filePath);

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
        } else if(path.endsWith(PremakeWatcher.targetConfigFile)){
            Configuration.loadConfig()
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

   
    /**
     * Checks if the premake version is installed, if not prompt to install.
     * If the version is set but not installed it prompts for installation.
     */
    private static async versionCheck() {
        if (!PremakeVersionManager.isVersionSet()) {
            if (await utils.Prompt.Pass('Premake version is not set. Do you want to set Premake version?')) {
                await PremakeVersionManager.installPremakePicker();
            }

        } else {
            const version: string = await PremakeVersionManager.getVersion();
            if (
                !await PremakeVersionManager.isVersionReleaseInstalled(version) &&
                await utils.Prompt.Pass('Premake version is not installed for selected release. Do you want to install it?')
            ) {
                await PremakeVersionManager.installPremakeVersion(version);
            }
        }
    }

    /**
     * checks if the current workspace contains a premake5.lua file.
     * @param filePath to check in.
     */
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

    static async checkConfigAvailable(filePath: string)
    {
        console.log(filePath);
        try {
            await fs.access(filePath);
            await Configuration.loadConfig(); // Trigger the action if the file is found
        }
        catch (error: any) {
            console.log(error);
            console.log("no premakeConfig.yml found");
        }
    }
}


