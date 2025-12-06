import { SourceUtils } from 'utils/source-utils';
import * as vscode from 'vscode';

export class SourceRegistrar {
    protected context: vscode.ExtensionContext
    constructor(context: vscode.ExtensionContext) {
        this.context = context;
    }

    public async registerSources(paths: string[]) {
        for (const path of paths) {
            await this.registerSourcePath(path);
        }
    }


    public async registerSourcePath(path: string): Promise<void> {
        const pathArr: string[] = path.split('/');
        await this.registerSource(pathArr);
    }

    public async registerSource(path: string[]): Promise<void> {
        await SourceUtils.register(this.context, path);
    }
}