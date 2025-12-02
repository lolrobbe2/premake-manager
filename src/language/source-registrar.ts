import { SourceUtils } from 'utils/source-utils';
import * as vscode from 'vscode';

export class SourceRegistrar {
    protected context: vscode.ExtensionContext
    constructor(context: vscode.ExtensionContext) {
        this.context = context;
    }

    public registerSources(paths: string[]){
        paths.forEach(async (path)=> await this.registerSourcePath(path));
    }

    public async registerSourcePath(path: string): Promise<void> {
        const pathArr: string[] = path.split('/');
        await this.registerSource(pathArr);
    }

    public async registerSource(path: string[]): Promise<void> {
        await SourceUtils.register(this.context, path);
    }
}