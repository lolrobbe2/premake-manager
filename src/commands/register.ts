import * as vscode from "vscode";

export class commands {
    public static registerCommand(context: vscode.ExtensionContext,commandName: string, commandHandler: (...args: any[]) => any)
    {
        const disposable = vscode.commands.registerCommand(commandName, commandHandler);
        context.subscriptions.push(disposable);
    }
}