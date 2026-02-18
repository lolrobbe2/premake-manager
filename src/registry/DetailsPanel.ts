import * as vscode from 'vscode';
import { RegistryRepo } from './ModuleResolver';
import { PathUtils } from 'utils/path-utils';

export class DetailPanel {
    public static currentPanel: DetailPanel | undefined;
    private readonly _panel: vscode.WebviewPanel;
    private _disposables: vscode.Disposable[] = [];
    private _extensionUri: vscode.Uri;

    public static createOrShow(repo: RegistryRepo, extensionUri: vscode.Uri,) {
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
            { enableScripts: true }
        );

        DetailPanel.currentPanel = new DetailPanel(panel, repo, extensionUri);
    }

    private constructor(panel: vscode.WebviewPanel, repo: RegistryRepo, extensionUri: vscode.Uri,) {
        this._panel = panel;
        this._extensionUri = extensionUri;
        this._panel.webview.onDidReceiveMessage(
        message => {
            switch (message.command) {
                case 'install':
                    
                    return;
            }
        },
        null,
        this._disposables
    );
        this._panel.onDidDispose(() => this.dispose(), null, this._disposables);
        this.update(repo);
    }

    public async update(repo: RegistryRepo) {
        this._panel.title = `Repo: ${repo.repoName}`;
        this._panel.webview.html = `<body>Loading ${repo.repoName} README...</body>`;

        try {
            const response = await fetch(repo.repoReadme);
            const markdown = await response.text();
            const renderedHtml = await vscode.commands.executeCommand<string>('markdown.api.render', markdown);
            
            this._panel.webview.html = this._getFullHtml(renderedHtml,repo);
        } catch (err) {
            this._panel.webview.html = `<body>Error: ${err}</body>`;
        }
    }

    /**
     * Assemblies the final HTML document
     */
    private _getFullHtml(content: string, repo: RegistryRepo): string {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            ${this._getStyles()}
        </head>
        <body>
            ${this._getHeaderHtml(repo,PathUtils.getMediaResource(this._extensionUri, ['premake-logo-128.png'])!)}
            <div class="main-container">
                <div class="readme-content">
                    ${content}
                </div>
                ${this._getSidebarHtml(repo)}
            </div>
        </body>
        ${this._getScripts(repo)}
        </html>`;
    }
    private _getScripts(repo: RegistryRepo): string {
        return `
        <script>
            const vscode = acquireVsCodeApi();

            function onInstallClicked() {
                // Send a message to the TypeScript extension
                vscode.postMessage({
                    command: 'install',
                    repoName: '${repo.repoName}',
                    url: '${repo.repoUrl}'
                });
            }
        </script>`;
    }
    private _getHeaderHtml(repo: RegistryRepo, iconUri: vscode.Uri): string {
        
        return `
        <div class="header">
                <div class="icon-container">
                    <img src="${this._panel.webview.asWebviewUri(iconUri)}" alt="${repo.repoName} icon" class="main-icon" />
                </div>            <div class="header-info">
                <h1>${repo.repoName}</h1>
                <div class="publisher">${repo.userName}</div>
                <div class="description">Premake ${repo.isLib ? "library":"module"} for ${repo.repoName}</div>
                <div class="badge-container">
                    <span class="badge version">V1.0.0</span>
                    <span class="badge" style="background: #4c1"> ${repo.isLib ? "library":"module"}</span>
                </div>
                <button class="install-button" onclick="onInstallClicked()">Install</button>
            </div>
        </div>`;
    }

    private _getSidebarHtml(repo: RegistryRepo): string {
        const tags = repo.tags.map(t => `<span class="tag">${t}</span>`).join('');
        const date = new Date(repo.createdAt).toLocaleDateString();

        return `
        <div class="side-panel">
            <div class="side-section">
                <h3>Resources</h3>
                <p><a href="${repo.repoUrl}">Repository</a></p>
            </div>
            <div class="side-section">
                <h3>Tags</h3>
                <div class="tag-container">${tags}</div>
            </div>
        </div>`;
    }

    private _getStyles(): string {
        return `
        <style>
            body { padding: 0; margin: 0; color: var(--vscode-editor-foreground); font-family: var(--vscode-font-family); display: flex; flex-direction: column; height: 100vh; }
            .header { display: flex; padding: 20px; background: var(--vscode-sideBar-background); border-bottom: 1px solid var(--vscode-panel-border); gap: 20px; }
            .icon-placeholder { width: 128px; height: 128px; background: var(--vscode-button-background); display: flex; align-items: center; justify-content: center; font-size: 48px; color: var(--vscode-button-foreground); border-radius: 4px; }
            .header-info h1 { margin: 0; font-size: 28px; font-weight: 400; }
            .publisher { color: var(--vscode-textLink-foreground); margin-bottom: 8px; }
            .badge-container { display: flex; gap: 5px; margin-bottom: 15px; }
            .badge { color: white; padding: 2px 8px; font-size: 11px; border-radius: 3px; }
            .badge.version { background: var(--vscode-statusBarItem-remoteBackground); }
            .install-button { background: var(--vscode-button-background); color: var(--vscode-button-foreground); border: none; padding: 6px 14px; cursor: pointer; border-radius: 2px; }
            .install-button:hover { background: var(--vscode-button-hoverBackground); }
            .main-container { display: flex; flex: 1; overflow: hidden; }
            .readme-content { flex: 1; padding: 20px; overflow-y: auto; border-right: 1px solid var(--vscode-panel-border); }
            .side-panel { width: 250px; padding: 20px; font-size: 12px; overflow-y: auto; }
            .side-section h3 { text-transform: uppercase; font-size: 11px; border-bottom: 1px solid var(--vscode-panel-border); padding-bottom: 5px; }
            .tag { display: inline-block; background: var(--vscode-badge-background); color: var(--vscode-badge-foreground); padding: 2px 6px; margin: 2px; border-radius: 10px; }
            pre { background: var(--vscode-textCodeBlock-background); padding: 10px; border-radius: 4px; }
        </style>`;
    }

    private _getLoadingHtml(name: string): string {
        return `<body><div style="padding: 20px;">Loading ${name}...</div></body>`;
    }

    public dispose() {
        DetailPanel.currentPanel = undefined;
        this._panel.dispose();
        while (this._disposables.length) {
            const x = this._disposables.pop();
            if (x) { x.dispose(); }
        }
    }
}