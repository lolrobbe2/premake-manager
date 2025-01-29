import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { PremakeVersionManager } from 'premakeInstaller/premakeVersionManger';
import { VSCodeUtils } from 'utils/utils';
import { PremakeInstance, PremakeRunner } from 'utils/premakeRunner';
import { spawn } from 'child_process';
import { action } from 'projectManagement/premake5/action';
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
    cursorForward: "\x1b[C",
    saveCursorPosition: "\x1b7",
    restoreCursorPosition: "\x1b8"
};

const sequences = {
    PROMPT_START: "\x1b]133;A\x07",
    PROMPT_END: "\x1b]133;B\x07",
    PRE_EXECUTION: "\x1b]133;C\x07",
}
const cursorActions = {
    BLINK_ENABLE: "\x1b5",
    BLINK_DISABLE: "\x1b25",
    HIDE: "\x1b[?25h",
    SHOW: "\x1b[?25l"
}
const cursorShape = {
    DEFAULT:"\x1b[0 q",
    BLINKING_BLOCK:"\x1b[1 q",
    STEADY_BLOCK: "\x1b[2 q",
    BLINKING_UNDERLINE:"\x1b[3 q",
    STEADY_UNDERLINE:"\x1b[4 q",
    BLINKING_BAR:"\x1b[5 q",
    STEADY_BAR: "\x1b[6 q"    
}
const promptText = "premake5 "
const defaultLine = sequences.PROMPT_START + promptText + sequences.PROMPT_END;

export class Terminal implements vscode.Pseudoterminal{

    constructor(name:string = "premake5") {
        const terminal =  vscode.window.createTerminal({
            name:name,
            pty:this,
            
        });
        terminal.show();
        this.writeEmitter.fire("\x1b N");
        this.prompt("premake5");
        this.firstInput = false;
        
    }
    
    content = "";
    writeEmitter = new vscode.EventEmitter<string>();
    history: string[] = [];
    historyIndex:number = 0;
    promptLenght:number = 0;
    cursorIndexPoition: number = 0;
    firstInput:boolean = true;
    promptEnabled: boolean = false;
    onDidWrite: vscode.Event<string> = this.writeEmitter.event;

    private processing:boolean = false;
    open(initialDimensions: vscode.TerminalDimensions | undefined): void {
        this.writeEmitter.fire(this.content);
        vscode.TerminalProfile
    }
    close(): void {
        throw new Error('Method not implemented.');
    }
    async handleInput?(data: string): Promise<void> {
        switch (data) {
            case keys.enter:
                const input:string = this.getPrompt()!; //don't miss the !
                this.writeEmitter.fire(data);
                console.log(input);
                await this.handlePremakeCommand(input);
                this.prompt("premake5");
                this.writeEmitter.fire(data);
                break;
            case keys.backspace:
                this.removeText(1);
                break;
            case actions.cursorUp:
            case actions.cursorDown:
            case actions.cursorBack:
            case actions.cursorForward:
            default:
                this.writeText(data);

        }
    }
    setDimensions?(dimensions: vscode.TerminalDimensions): void {

    }
   
    writeText(text: string) {
        if(this.promptEnabled)
            this.promptLenght += this.getTextUnescape(text).length;
        this.content += this.getTextUnescape(text);
        this.writeEmitter.fire(text);
    }

    prompt(prompt: string) {
        this.writeText(sequences.PROMPT_START);
        this.writeText("\r\n");
        this.writeText(prompt);
        this.moveCursorForward(2);
        this.writeText(' ');
        this.writeText(sequences.PROMPT_END); 
        this.promptEnabled = true;
        this.promptLenght = 0; 
    }
    saveCursorPosition():void {
        this.writeEmitter.fire(actions.saveCursorPosition);
    }
    restoreCursorPosition():void {
        this.writeEmitter.fire(actions.restoreCursorPosition);
    }
    removeText(amount:number):void {
        if((this.promptLenght - amount) < 0)
            amount = this.promptLenght
        if(amount > 0) {
            this.content = this.content.slice(0,this.content.length - (amount + 1));
            this.writeEmitter.fire(`\x1b[${amount}D`);
            this.writeEmitter.fire(`\x1b[${amount}P`);
            this.promptLenght -= amount;
        }
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
        await new Promise<void>((resolve, reject) => {
            const process = spawn(path.join(folder, 'premake5'), command.split(' '),{cwd:VSCodeUtils.getWorkspaceFolder()});
            this.processing = true;
        
            process.stdout.on('data', (data: Buffer) => {
                this.writeText(data.toString());
            });

            process.stderr.on('data', (data: Buffer) => {
                this.writeText(data.toString());
            });

            process.on('close', (code) => {
                this.processing = false;
                resolve();
            });    
                
        });
    }
    executionEnd(code:number):string{
        return `\x1b]133;D[;${code}]\x07`;
    }
    moveCursorForward(amount: number):void {
        if(this.firstInput) return;
        if (amount < 0) {
            throw new Error("Amount must be a non-negative integer.");
        }
        for(let i = 0; i < amount;i++) {
            this.writeEmitter.fire(`\x1b[C`);
        }
    }
    enableBlinking(){
        this.writeEmitter.fire(cursorActions.BLINK_ENABLE);
    }
    getPrompt() : string | undefined{
        if(this.promptEnabled){
            this.promptEnabled = false;
            return this.content.slice(this.content.length - this.promptLenght, this.content.length);
        }
        return undefined;
    }
    /**
     * 
     * @param blinking enable blinking
     */
    setBlockShape(blinking: boolean = true) {
        if(blinking) 
            this.writeEmitter.fire(cursorShape.BLINKING_BLOCK);
        else 
            this.writeEmitter.fire(cursorShape.STEADY_BLOCK);
    }
    setBarShape(blinking: boolean = true) {
        if(blinking) 
            this.writeEmitter.fire(cursorShape.BLINKING_BAR);
        else 
            this.writeEmitter.fire(cursorShape.STEADY_BAR);
    }
    setUnderlineShape(blinking: boolean = true) {
        if(blinking)
            this.writeEmitter.fire(cursorShape.BLINKING_UNDERLINE);
        else 
            this.writeEmitter.fire(cursorShape.STEADY_UNDERLINE);
    }
    getContentUnescape() {
        const ansiEscapePattern = /\x1b\[[0-9;A-Za-z]*[A-Za-z]/g;
        return this.content.replace(ansiEscapePattern, '');
    }
    getTextUnescape(text: string) {
        const ansiEscapePattern =/\x1b\[[0-9;A-Za-z]*[A-Za-z]/g;
        return text.replace(ansiEscapePattern, '');
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
