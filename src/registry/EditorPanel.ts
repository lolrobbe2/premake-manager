import { PathUtils } from 'utils/path-utils';
import * as vscode from 'vscode';
import { MessageBridge } from './MessageBridge';
import { RegistryBridge } from './RegistryManager';

export class EditorPanel {
    public static currentPanel: EditorPanel | undefined;
    private readonly _panel: vscode.WebviewPanel;
    public readonly _bridge: MessageBridge;
    private _listener: ((ev: any) => any | undefined) | undefined;
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
        panel.iconPath = PathUtils.getMediaResource(extensionContext, ["premake-logo-128.png"]);

        EditorPanel.currentPanel = new EditorPanel(panel, extensionContext);
    }

    private constructor(panel: vscode.WebviewPanel, extensionContext: vscode.ExtensionContext) {
        this._panel = panel;
        this._extensionContext = extensionContext;
        this._bridge = new MessageBridge((handler) => this.onAddEventListener('message', (event) => handler(event)), panel.webview.postMessage.bind(panel.webview));
        this._panel.webview.onDidReceiveMessage((e) => { 
            console.log(e);
            if (this._listener !== undefined) { this._listener(e) } 
        });
        this._bridge.on("GetIndex",RegistryBridge.GetIndex);
        // Set the base HTML immediately
        this._panel.webview.html = this._getFullHtml(extensionContext);
        this._panel.onDidDispose(() => this.dispose(), null, this._disposables);
    }


    private _getFullHtml(extensionContext: vscode.ExtensionContext): string {
        const webview = this._panel.webview;
        const codiconsUri = webview.asWebviewUri(
            vscode.Uri.joinPath(extensionContext.extensionUri, 'node_modules/@vscode/codicons/dist/codicon.css')
        );
        // Use your PathUtils to find the JS and CSS bundles
        const scriptUri = webview.asWebviewUri(
            PathUtils.getMediaResource(extensionContext, ['editor', 'editor-bundle.js'])!
        );

        const styleUri = webview.asWebviewUri(
            PathUtils.getMediaResource(extensionContext, ['editor', 'editor-bundle.css'])!
        );

        return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="${codiconsUri}" rel="stylesheet" id="vscode-codicon-stylesheet"/>
        <link href="${styleUri}" rel="stylesheet">    </head>
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
    public static close() {
        this.currentPanel?.dispose();
    }
    private onAddEventListener<K>(type: K, listener: (ev: any) => any,
        options?: boolean | EventListenerOptions) {
        if (type === 'message') {
            this!._listener = listener;
        }
    }
}