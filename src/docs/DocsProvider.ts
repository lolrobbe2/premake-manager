import { PathUtils } from 'utils/path-utils';
import * as vscode from 'vscode';

export class DocsPanel {
    public static currentPanel: DocsPanel | undefined;
    private readonly _panel: vscode.WebviewPanel;
    private _disposables: vscode.Disposable[] = [];
    private readonly _extensionContext: vscode.ExtensionContext;
    public static createOrShow(extensionContext: vscode.ExtensionContext) {
        const column = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.viewColumn : undefined;
        // If we already have a panel, show it.
        if (DocsPanel.currentPanel) {
            DocsPanel.currentPanel._panel.reveal(column);
            return;
        }

        // Otherwise, create a new panel.
        const panel = vscode.window.createWebviewPanel(
            'docsPanel', // Internal ID
            `Premake Manager Docs`, // Title of the tab
            column || vscode.ViewColumn.One,
            {
                enableScripts: true,
                retainContextWhenHidden: true
            }
        );
        panel.iconPath = PathUtils.getMediaResource(extensionContext,["premake-logo-128.png"]);

        DocsPanel.currentPanel = new DocsPanel(panel, extensionContext);
    }

    private constructor(panel: vscode.WebviewPanel, extensionContext: vscode.ExtensionContext) {
        this._panel = panel;
        this._extensionContext = extensionContext;

        // Set the base HTML immediately
        this._panel.webview.html = this._getFullHtml(extensionContext);


        this._panel.onDidDispose(() => this.dispose(), null, this._disposables);
    }

    
        // Fetch and render Markdown
        
    private _getFullHtml(extensionContext: vscode.ExtensionContext): string {
        const webview = this._panel.webview;
        return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body, html { margin: 0; padding: 0; height: 100%; width: 100%; overflow: hidden; }
                    iframe { border: none; width: 100%; height: 100%; }
                </style>
            </head>
            <body>
                <iframe src="https://lolrobbe2.github.io/premake-manager/#/"></iframe>
            </body>
            </html>`;
    }
    public dispose() {
        DocsPanel.currentPanel = undefined;
        this._panel.dispose();
        while (this._disposables.length) {
            const x = this._disposables.pop();
            if (x) { x.dispose(); }
        }
    }
    public static close(){
        this.currentPanel?.dispose();
    }
}