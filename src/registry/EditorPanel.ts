import { PathUtils } from 'utils/path-utils';
import * as vscode from 'vscode';
import { RegistryRepo } from './RepoResolver';

export class EditorPanel {
    public static currentPanel: EditorPanel | undefined;
    private readonly _panel: vscode.WebviewPanel;
    private _disposables: vscode.Disposable[] = [];
    private readonly _extensionContext: vscode.ExtensionContext;
    public static createOrShow(extensionContext: vscode.ExtensionContext) {
        const column = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.viewColumn : undefined;
        // If we already have a panel, show it.
        if (EditorPanel.currentPanel) {
            EditorPanel.currentPanel._panel.reveal(column);
            return;
        }

        // Otherwise, create a new panel.
        const panel = vscode.window.createWebviewPanel(
            'indexEditor', // Internal ID
            `Index Editor`, // Title of the tab
            column || vscode.ViewColumn.One,
            { 
                enableScripts: true,
                localResourceRoots: [
                    extensionContext.extensionUri,
                    vscode.Uri.parse(PathUtils.getExtensionResourceRoot(extensionContext)!),
                    vscode.Uri.parse('node_modules')
                ]
            }
        );
        panel.iconPath = PathUtils.getMediaResource(extensionContext,["premake-logo-128.png"]);

        EditorPanel.currentPanel = new EditorPanel(panel, extensionContext);
    }

    private constructor(panel: vscode.WebviewPanel, extensionContext: vscode.ExtensionContext) {
        this._panel = panel;
        this._extensionContext = extensionContext;

        // Set the base HTML immediately
        this._panel.webview.html = this._getFullHtml(extensionContext);
        this._panel.onDidDispose(() => this.dispose(), null, this._disposables);
    }


    private _getFullHtml(extensionContext: vscode.ExtensionContext): string {
        const webview = this._panel.webview;

        // Use your PathUtils to find the JS and CSS bundles
        const scriptUri = webview.asWebviewUri(
            PathUtils.getMediaResource(extensionContext,['details', 'editor-bundle.js'])!
        );

        const styleUri = webview.asWebviewUri(
            PathUtils.getMediaResource(extensionContext,['editor', 'editor-bundle.css'])!
        );

        return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="${styleUri}" rel="stylesheet">
    </head>
    <body>
        <div id="root"></div>
        <script type="module" src="${scriptUri}"></script>
    </body>
    </html>`;
    }
    public dispose() {
        EditorPanel.currentPanel = undefined;
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