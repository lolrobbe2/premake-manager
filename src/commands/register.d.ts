import * as vscode from "vscode";
export declare class commands {
    static registerCommand(context: vscode.ExtensionContext, commandName: string, commandHandler: (...args: any[]) => any): void;
}
