import { DocsPanel } from "docs/DocsProvider";
import * as vscode from 'vscode';
import { CommandRegistrar } from "./command-registrar";

export class DocumentationCommand extends CommandRegistrar {
    protected execute(...args: any[]): void {
        DocsPanel.createOrShow(this.context);
    }
    constructor(context: vscode.ExtensionContext, register: boolean) {
        super(context, register,'premake5.open-documentation', "open documenation")
    }
}