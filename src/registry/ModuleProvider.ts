import { TerminalInterface } from "cli/manager/terminalInterface";
import { PathUtils } from "utils/path-utils";
import vscode from "vscode";
import { DetailPanel } from "./DetailsPanel";
import { RegistryRepo } from "./RepoResolver";


interface WebViewMessage {
    command: string,
    repo: RegistryRepo,
}
export class ModuleProvider implements vscode.WebviewViewProvider {
    private type: string = "premake5.manager.module";
    private _view?: vscode.WebviewView;
    constructor(
        private readonly _extensionUri: vscode.Uri,
        private readonly _extensionContext: vscode.ExtensionContext
    ) {


    }

    resolveWebviewView(webviewView: vscode.WebviewView, context: vscode.WebviewViewResolveContext, token: vscode.CancellationToken): Thenable<void> | void {
        this._view = webviewView;

        this._view!.webview.options = {
            enableForms: true,
            // Allow scripts in the webview
            enableScripts: true,

            localResourceRoots: [
                this._extensionUri,
                vscode.Uri.joinPath(this._extensionUri, 'node_modules')
                
            ]
        };
        this._view!.webview.html = this._getFullHtml(this._extensionContext);
        this._view!.webview.onDidReceiveMessage(
            async message => {
                const mess: WebViewMessage = message;
                switch (mess.command) {
                    case "showModuleDetails":
                        DetailPanel.createOrShow(mess.repo,this._extensionContext);
                        break;
                    case "closeModuleDetails":
                        DetailPanel.close();
                    case "installModule":
                        TerminalInterface.moduleAdd(`${mess.repo.userName}/${mess.repo.repoName}`);
                    default:
                        break;
                }
            },
            null
        );
    }

     private _getFullHtml(extensionContext: vscode.ExtensionContext): string {
            const webview = this._view!.webview;
            const codiconsUri = webview.asWebviewUri(
                vscode.Uri.joinPath(extensionContext.extensionUri,'node_modules/@vscode/codicons/dist/codicon.css')
            );

            const scriptUri = webview.asWebviewUri(
                PathUtils.getMediaResource(extensionContext, ['modules', 'modules-bundle.js'])!
            );
    
            const styleUri = webview.asWebviewUri(
                PathUtils.getMediaResource(extensionContext, ['modules', 'modules-bundle.css'])!
            );
    
            return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="${codiconsUri}" rel="stylesheet" id="vscode-codicon-stylesheet"/>
            <link href="${styleUri}" rel="stylesheet">
        </head>
        <body>
            <div id="root"></div>
            <script type="module" src="${scriptUri}"></script>
        </body>
        </html>`;
        }
}