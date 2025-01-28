import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { PremakeVersionManager } from 'premakeInstaller/premakeVersionManger';
import { VSCodeUtils } from 'utils/utils';
import { PremakeInstance, PremakeRunner } from 'utils/premakeRunner';
import { spawn } from 'child_process';
const keys = {
    enter: "\r",
    backspace: "\x7f",
};
const actions = {
    cursorBack: "\x1b[D",
    deleteChar: "\x1b[P",
    clear: "\x1b[2J\x1b[3J\x1b[;H",
    cursorUp: "\x1b[A",
    cursorDown: "\x1b[B",
    cursorForward: "\x1b[C"
};

const sequences = {
    PROMPT_START: "\x1b]133;A\x07",
    PROMPT_END: "\x1b]133;B\x07",
    PRE_EXECUTION: "\x1b]133;C\x07"
}
const promptText = "premake5 "
const defaultLine = sequences.PROMPT_START + promptText + sequences.PROMPT_END;
const formatText = (text: string) => `\r${text.split(/(\r?\n)/g).join("\r")}\r`;

export class Terminal implements vscode.Pseudoterminal{

    constructor(name:string = "premake5") {
        const terminal =  vscode.window.createTerminal({
            name:name,
            pty:this
        });
        terminal.show();
    }
    
    content = defaultLine;
    writeEmitter = new vscode.EventEmitter<string>();
    history: string[] = [];
    commandlenght:number = 0;
    onDidWrite: vscode.Event<string> = this.writeEmitter.event;

    private processing:boolean = false;
    open(initialDimensions: vscode.TerminalDimensions | undefined): void {
        this.writeEmitter.fire(this.content);
    }
    close(): void {
        throw new Error('Method not implemented.');
    }
    handleInput?(data: string): void {
        if (this.processing || (data === actions.cursorUp || data === actions.cursorDown)) {
            return;
        }
        switch (data) {
            case keys.enter:
                const command = this.getCommand();
                this.handleCommand(command)
                return;
            case keys.backspace:
                if (this.content.length <= defaultLine.length) {
                    return;
                  }
                  // remove last character
                  this.content = this.content.substr(0, this.content.length - 1);
                  this.writeEmitter.fire(actions.cursorBack);
                  this.writeEmitter.fire(actions.deleteChar);
                  this.commandlenght--;
                  return;
            default:
                // typing a new character
                this.commandlenght++;
                this.content += data;
                this.writeEmitter.fire(data);
                
        }
    }
    setDimensions?(dimensions: vscode.TerminalDimensions): void {
    }
    getCommand() : string{
        const lastIndex = this.content.lastIndexOf('\r\n');
        const command = this.content.slice(this.content.length - this.commandlenght , this.content.length);
        //this.content = this.content.slice(0, lastIndex);
        this.commandlenght = 0;
        return command
    }   
    async handleCommand(command: string): Promise<void> {
        this.handlePremakeCommand(command);
    }
    async handlePremakeCommand(command: string): Promise<void> {
        const workspaceFolder = VSCodeUtils.getWorkspaceFolder();
        const premakeFolder = path.join(workspaceFolder, '.premake');
        let premakeVersion = PremakeVersionManager.getVersion();
        if(premakeVersion === '')
        {
            vscode.window.showWarningMessage("premake version is not set, aborted launch!")    ;
            return undefined;    
        }
        premakeVersion = PremakeVersionManager.getVersion();
        const folder = path.join(premakeFolder,premakeVersion,PremakeVersionManager.getCurrentPlatform());
        const process = spawn(path.join(folder, 'premake5'), command.split(' '),{cwd:VSCodeUtils.getWorkspaceFolder()});
        this.processing = true;
        this.content += formatText(`${sequences.PROMPT_START}premake5  ${command} ${sequences.PROMPT_END} \r\n\r\n ${sequences.PRE_EXECUTION}`);
        this.writeEmitter.fire(formatText(`${sequences.PROMPT_START}premake5  ${command} ${sequences.PROMPT_END} \r\n\r\n ${sequences.PRE_EXECUTION}`));

        process.stdout.on('data', (data: Buffer) => {
            this.content += formatText(data.toString());
            this.writeEmitter.fire(formatText(data.toString()));
        });

        process.stderr.on('data', (data: Buffer) => {
            this.content += formatText(data.toString());
            this.writeEmitter.fire(formatText(data.toString()));
        });

        process.on('close', (code) => {
            this.content += formatText(`Process exited with code ${this.executionEnd(code ?? 0)}\r\n\r\n${defaultLine}`);
            this.writeEmitter.fire(formatText(`Process exited with code ${this.executionEnd(code ?? 0)}\r\n\r\n${defaultLine}`));
            this.moveCursorForward(promptText.length);
            this.processing = false;

        });        

    }
    executionEnd(code:number):string{
        return `\x1b]133;D[;${code}]\x07`;
    }
    moveCursorForward(amount: number):void {
        if (amount < 0) {
            throw new Error("Amount must be a non-negative integer.");
        }
        this.writeEmitter.fire(`\x1b[${amount}C`);
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
