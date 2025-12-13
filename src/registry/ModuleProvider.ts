import { PathUtils } from "utils/path-utils";
import vscode from "vscode";
import ModuleResolver, { RegistryRepo, RepoSearchType, RepositoryResolver } from "./ModuleResolver";


class ModuleItem {
    private readonly _repo: RegistryRepo;
    constructor(repo: RegistryRepo) {
        this._repo = repo;
    }

    async getHtml(defaultIcon: vscode.Uri) {
        const icon: string | vscode.Uri = await RepositoryResolver.HasIcon(this._repo) == true ? `https://raw.githubusercontent.com/${this._repo.userName}/${this._repo.repoName}/main/icon.svg}` : defaultIcon;
        const info = await RepositoryResolver.getInfo(this._repo);
        return `<div class="module-item">
        <img src="${icon}" alt="icon"/>
            <div class="module-info">
                <p>${this._repo.repoName}</p>
                <p>${info.description}</p>
            </div>
        </div>`;
    }
}

interface WebViewMessage {
    type: string,
    value: string,
}
export class ModuleProvider implements vscode.WebviewViewProvider {
    private type: string = "premake5.manager.module";
    private _view?: vscode.WebviewView;
    private searchType: RepoSearchType = RepoSearchType.Recent;
    private modules: ModuleItem[] = [];
    constructor(
        private readonly _extensionUri: vscode.Uri,
        private readonly _extensionContext: vscode.ExtensionContext
    ) {


    }

    resolveWebviewView(webviewView: vscode.WebviewView, context: vscode.WebviewViewResolveContext, token: vscode.CancellationToken): Thenable<void> | void {
        this._view = webviewView;

        webviewView.webview.options = {
            enableForms: true,
            // Allow scripts in the webview
            enableScripts: true,

            localResourceRoots: [
                this._extensionUri
            ]
        };
        webviewView.webview.html = this.getModulesViewHtml(webviewView.webview);
        this._view!.webview.onDidReceiveMessage(
            async message => {
                const mess: WebViewMessage = message;
                switch (mess.type) {
                    case "search":
                        await this.search(mess.value);
                        const defaultIcon = webviewView.webview.asWebviewUri(PathUtils.getMediaResource(this._extensionUri, ['web','premake-logo-128.png'])!);
                        await webviewView.webview.postMessage({type:"modules",value: await this.getModulesHtml(defaultIcon)})
                        break;
                    case "setSearchType":
                        this.searchType = mess.value as RepoSearchType;
                    default:
                        break;
                }


            },
            null
        );
    }
    getModulesViewHtml(webview: vscode.Webview) {
        const styleMainCss = webview.asWebviewUri(PathUtils.getMediaResource(this._extensionUri, ['web', 'main.css'])!);
        const styleSearchCss = webview.asWebviewUri(PathUtils.getMediaResource(this._extensionUri, ['web', 'search.css'])!);
        const codiconsUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'node_modules', '@vscode/codicons', 'dist', 'codicon.css'));

        const mainScript = webview.asWebviewUri(PathUtils.getMediaResource(this._extensionUri, ['web', 'main.js'])!);

        const nonce: string = this.getNonce();
        return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">

				<!--
					Use a content security policy to only allow loading styles from our extension directory,
					and only allow scripts that have a specific nonce.
					(See the 'webview-sample' extension sample for img-src content security policy examples)
				-->
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; script-src 'nonce-${nonce}'; font-src ${webview.cspSource};img-src ${webview.cspSource};">

				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<link href="${styleMainCss}" rel="stylesheet">
                <link href="${styleSearchCss}" rel="stylesheet">
				<link href="${codiconsUri}" rel="stylesheet" />
				<title>Modules</title>
			</head>
			<body>
				${this.getSearchInputHtml()}
                <div class="modules" id="modules-div">
                </div>
                <script nonce="${nonce}" src="${mainScript}" type="module"></script>
			</body>
			</html>`;
    }


    getSearchInputHtml() {
        return `
    <div class="search-input icons">
        <input
            class="input"
            type="text"
            id="module-search"
            placeholder="Search modules…"
        />
        <div class="icon" id="filter-button"><i class="codicon codicon-filter"></i></div>
    </div>
    <div class="filter-panel" id="filter-panel" hidden>
        <button class="filter-btn" data-type="UserName">User name</button>
        <button class="filter-btn" data-type="RepoName">Repository name</button>
        <button class="filter-btn" data-type="Tag">Tag</button>
        <button class="filter-btn" data-type="Recent">Recent</button>
    </div>`
    }
    getNonce() {
        let text: string = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 32; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    async search(searchValue: string){
        this.modules = (await ModuleResolver.getModules(this.searchType,searchValue,0)).map((repo)=> new ModuleItem(repo));
    }
    async getModulesHtml(defaultIcon: vscode.Uri):Promise<string>{
        const htmlParts: string[] = await Promise.all(
            this.modules.map(async (mod) => {
                return await mod.getHtml(defaultIcon);
            })
        );

        return htmlParts.join("\n");    }
}