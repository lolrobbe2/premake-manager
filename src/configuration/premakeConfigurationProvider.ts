import * as vscode from "vscode";


export class PremakeConfigurationProvider implements vscode.DebugConfigurationProvider {
    provideDebugConfigurations?(folder: vscode.WorkspaceFolder | undefined, token?: vscode.CancellationToken): vscode.ProviderResult<vscode.DebugConfiguration[]>{
        
    }
}