import type { IndexView } from "./IndexTypes";
import { MessageBridge } from "./MessageBridge";
import { getVsCodeApi } from "./vscode";

export class IndexReader {
    private static initalized: boolean = false;
    private static bridge: MessageBridge | undefined;
    public static Initialize() : void{
        if(this.initalized === true)
            return;
        const vscode = getVsCodeApi();
        if(vscode !== undefined) {
            this.bridge = new MessageBridge((handler) => window.addEventListener('message', (event) => handler(event.data)), (data) => vscode.postMessage(data));

        } else {
            this.bridge = new MessageBridge((handler) => window.addEventListener('message', (event) => handler(event.data)) ,window.postMessage.bind(window));
        }
    }

    public static async GetIndex() : Promise<IndexView>{
        return await this.bridge!.request<IndexView>("GetIndex",undefined);
    }

    public static async AddLibrary(githubLink: string){
        return await this.bridge!.request<void>("AddLibrary", githubLink);
    }

    public static async RemoveLibrary(name: string) {
        return await this.bridge!.request<void>("RemoveLibrary", name);
    }
}