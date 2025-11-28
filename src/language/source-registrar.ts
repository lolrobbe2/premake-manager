import { SourceUtils } from 'utils/source-utils';
import * as vscode from 'vscode';

export class SourceRegistrar {
    protected context: vscode.ExtensionContext
    constructor(context: vscode.ExtensionContext) {
        this.context = context;
    }

    public registerSources(paths: string[]){
        paths.forEach((path)=>this.registerSourcePath(path));
    }

    public registerSourcePath(path: string): void {
        const pathArr: string[] = path.split('/');
        this.registerSource(pathArr);
    }

    public registerSource(path: string[]): void {
        SourceUtils.register(this.context, path);
    }
}