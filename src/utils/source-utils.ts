import * as vscode from 'vscode';
import { PathUtils } from "./path-utils";
export class SourceUtils {
    /**
     * this function retrieves the language resource root path
     * @param context of the extension 
     * @returns the resource path or undefined on failure
     */
    static getLanguageResource(context: vscode.ExtensionContext, subpaths: string[]) :string | undefined{
        return PathUtils.getResource(context,['language',...subpaths]);
    }

    /**
     * this function registers a language source file
     * @param context of the extension 
     * @param path of the language root resource folder
     */
    static async register(context: vscode.ExtensionContext,path:string[]){
        const config = vscode.workspace.getConfiguration("Lua.workspace");
        const current = config.get("library") as string[] || [];

        const resourcePath: string | undefined = this.getLanguageResource(context,path);
        if(current.includes(resourcePath!)){
            console.error(`[SOURCE_UTILS] resource was already registered in current workspace`);
            return;
        }

        const updated = [...current, resourcePath];

        await config.update(
            "library",
            updated,
            vscode.ConfigurationTarget.Workspace
        );
    }
}