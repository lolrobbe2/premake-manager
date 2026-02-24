import { PathUtils } from 'utils/path-utils';
import * as vscode from 'vscode';
import { RegistryRepo } from './RepoResolver';

export class DetailPanel {
    public static currentPanel: DetailPanel | undefined;
    private readonly _panel: vscode.WebviewPanel;
    private _disposables: vscode.Disposable[] = [];
    private readonly _extensionContext: vscode.ExtensionContext;
    public static createOrShow(repo: RegistryRepo, extensionContext: vscode.ExtensionContext) {
        const column = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.viewColumn : undefined;
        // If we already have a panel, show it.
        if (DetailPanel.currentPanel) {
            DetailPanel.currentPanel._panel.reveal(column);
            DetailPanel.currentPanel.update(repo);
            return;
        }

        // Otherwise, create a new panel.
        const panel = vscode.window.createWebviewPanel(
            'repoDetail', // Internal ID
            `Repo: ${repo.repoName}`, // Title of the tab
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

        DetailPanel.currentPanel = new DetailPanel(panel, repo, extensionContext);
    }

    private constructor(panel: vscode.WebviewPanel, repo: RegistryRepo, extensionContext: vscode.ExtensionContext) {
        this._panel = panel;
        this._extensionContext = extensionContext;

        // Set the base HTML immediately
        this._panel.webview.html = this._getFullHtml(extensionContext);

        this._panel.webview.onDidReceiveMessage(
            message => {
                switch (message.command) {
                    case 'ready':
                        // React is loaded and ready for data
                        this.update(repo);
                        break;
                    case 'install':
                        vscode.window.showInformationMessage(`Installing ${repo.repoName}...`);
                        break;
                }
            },
            null,
            this._disposables
        );

        this._panel.onDidDispose(() => this.dispose(), null, this._disposables);
    }

    public async update(repo: RegistryRepo) {
        this._panel.title = `Repo: ${repo.repoName}`;

        // Use PathUtils to get the icon URI
        const iconUri = PathUtils.getMediaResource(this._extensionContext,['premake-logo-128.png']);
        const webviewIconUri = iconUri ? this._panel.webview.asWebviewUri(iconUri).toString() : '';

        // Push Header Data
        this._panel.webview.postMessage({
            command: 'setHeader',
            data: {
                name: repo.repoName,
                user: repo.userName,
                isLib: repo.isLib,
                icon: webviewIconUri,
                repoUrl: repo.repoUrl
            }
        });

        // Push Sidebar Data
        this._panel.webview.postMessage({
            command: 'setSidebar',
            data: {
                url: repo.repoUrl,
                tags: repo.tags
            }
        });

        // Fetch and render Markdown
        try {
            let response = await fetch(repo.repoMainReadme);

            // If main fails (404), try master
            if (!response.ok) {
                response = await fetch(`${repo.repoMainReadme}.md`);
            }
            if (!response.ok) {
                response = await fetch(repo.repoMasterReadme);
            }
            if (!response.ok) {
                response = await fetch(`${repo.repoMasterReadme}.md`);
            }
            const markdown = await response.text();
            const renderedHtml = await vscode.commands.executeCommand<string>('markdown.api.render', markdown);

            this._panel.webview.postMessage({
                command: 'setContent',
                data: renderedHtml
            });
        } catch (err) {
            this._panel.webview.postMessage({
                command: 'setContent',
                data: `<p style="color:var(--vscode-errorForeground)">Error loading content.</p>`
            });
        }
    }

    private _getFullHtml(extensionContext: vscode.ExtensionContext): string {
        const webview = this._panel.webview;

        // Use your PathUtils to find the JS and CSS bundles
        const scriptUri = webview.asWebviewUri(
            PathUtils.getMediaResource(extensionContext,['details', 'details-bundle.js'])!
        );

        const styleUri = webview.asWebviewUri(
            PathUtils.getMediaResource(extensionContext,['details', 'details-bundle.css'])!
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
        DetailPanel.currentPanel = undefined;
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