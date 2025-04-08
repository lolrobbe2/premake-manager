import { existsSync, promises, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { PremakeWatcher } from 'premakeInstaller/premakeDetector.js';
import { PremakeVersionManager } from 'premakeInstaller/premakeVersionManger';
import * as vscode from 'vscode';
import { Document, parseDocument, ToStringOptions, YAMLMap } from 'yaml';
import * as utils from '../utils/utils.js';
import { ModuleConfig } from 'modules/moduleUtils.js';


export interface PremakeConfig {
    version: string;
    modules: YAMLMap<string, ModuleConfig>;
}

class Configuration {
    public static config: PremakeConfig;

    public static async loadConfig(): Promise<void>{
        const configFilePath = path.join(utils.VSCodeUtils.getWorkspaceFolder(), PremakeWatcher.targetConfigFile);
        
        if (!existsSync(configFilePath) && await utils.Prompt.Pass('premakeConfig.yml does not exist, do you want to create it?')) {
            const yamlContent: string = PremakeVersionManager.isVersionSet() ? `version: ${PremakeVersionManager.getVersion()}` : '';
            writeFileSync(configFilePath, yamlContent, 'utf8');
            utils.Prompt.Info(`Created ${configFilePath} with version.`);
        } else {
            return;
        }
        console.log("loaded config");
        const fileContents: string = readFileSync(configFilePath, 'utf8');
        const parsedDocument = parseDocument(fileContents);

        // We can now get the content from the parsed document and safely convert it
        Configuration.config = {
            version: (parsedDocument.get('version') || '') as string,
            modules: (parsedDocument.get('modules') || {}) as YAMLMap<string,ModuleConfig>  // Modules should be a plain object
        };
    }

    public static getConfig(): PremakeConfig {
        return Configuration.config;
    }

    public static getVersion(): string {
        return Configuration.config.version ??  '';
    }

    public static setVersion(version: string): void {
        Configuration.config.version = version;
    }
    public static getModules(): YAMLMap<string, ModuleConfig> {
        return Configuration.config.modules;
    }

    public static async update(): Promise<void> {
        const doc = new Document();

        const yamlOptions: ToStringOptions = {
            indent: 4,  // Use 4 spaces for indentation
            blockQuote: true,  // Use block quoting for scalar values
            collectionStyle: 'block',  // Enforce block style for maps and sequences
            lineWidth: 80,  // Fold lines that are too long
            simpleKeys: true,  // Use implicit notation for simple keys
            singleQuote: true,  // Use single quotes for strings
            flowCollectionPadding: true,  // Add padding inside collections
        };

        // Set the version and modules in the Document
        doc.set('version', Configuration.config.version);
        if(Object.entries(Configuration.config.modules).length > 0){
            doc.set('modules', Configuration.config.modules);
        }
        const configFilePath = path.join(utils.VSCodeUtils.getWorkspaceFolder(), PremakeWatcher.targetConfigFile);
        // Asynchronously write the updated YAML document to the file
        try {
            await promises.writeFile(configFilePath, doc.toString(yamlOptions), 'utf8');
        } catch (error) {
            vscode.window.showErrorMessage(`Error updating premakeConfig.yml: ${error}`);
        }
    }
}

export default Configuration;
