import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { PremakeVersionManager } from 'premakeInstaller/premakeVersionManger';
import { VSCodeUtils } from 'utils/utils';
import { PremakeRunner } from 'utils/premakeRunner';
const defaultLine = "premake5 ";
const keys = {
    enter: "\r",
    backspace: "\x7f",
};
const actions = {
    cursorBack: "\x1b[D",
    deleteChar: "\x1b[P",
    clear: "\x1b[2J\x1b[3J\x1b[;H",
};
const formatText = (text: string) => `\r${text.split(/(\r?\n)/g).join("\r")}\r`;

export class Terminal implements vscode.Pseudoterminal{
    content = defaultLine;
    writeEmitter = new vscode.EventEmitter<string>();
    onDidWrite: vscode.Event<string> = this.writeEmitter.event;
    open(initialDimensions: vscode.TerminalDimensions | undefined): void {
        this.writeEmitter.fire(this.content);
    }
    close(): void {
        throw new Error('Method not implemented.');
    }
    handleInput?(data: string): void {
        switch (data) {
            case keys.enter:
            case keys.backspace:
                if (this.content.length <= defaultLine.length) {
                    return;
                  }
                  // remove last character
                  this.content = this.content.substr(0, this.content.length - 1);
                  this.writeEmitter.fire(actions.cursorBack);
                  this.writeEmitter.fire(actions.deleteChar);
                  return;
            default:
                // typing a new character
                this.content += data;
                this.writeEmitter.fire(data);
        }
    }
    setDimensions?(dimensions: vscode.TerminalDimensions): void {
    }
    

}

export class TaskHandler {
    public static async runTask(task:vscode.Task): Promise<vscode.Task | undefined>{
        if(task.definition.type !== "premake5") {return undefined}
        const workspaceFolder = VSCodeUtils.getWorkspaceFolder();
        const premakeFolder = path.join(workspaceFolder, '.premake');
        let premakeVersion = PremakeVersionManager.getVersion();
        if(premakeVersion === '')
        {
            vscode.window.showWarningMessage("premake version is not set, aborted task launch!")    ;
            return undefined;    
        }
        premakeVersion = PremakeVersionManager.getVersion();
        const folder = path.join(premakeFolder,premakeVersion,PremakeVersionManager.getCurrentPlatform());
        return new vscode.Task(task.definition,task.scope ?? vscode.TaskScope.Workspace,task.definition.action,'premake5', new vscode.ShellExecution(path.join(folder,'premake5'),[task.definition.action]));
        
    }
}
