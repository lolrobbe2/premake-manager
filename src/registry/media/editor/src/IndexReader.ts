import type { IndexView } from "./IndexTypes";
import { MessageBridge } from "./MessageBridge";
import { getVsCodeApi } from "./vscode";

export class IndexReader {

    private static bridge: MessageBridge | undefined;
    public static Initialize() : void{
        const vscode = getVsCodeApi();
        if(vscode !== undefined) {
            this.bridge = new MessageBridge(window.addEventListener, vscode.postMessage);

        } else {
            this.bridge = new MessageBridge(window.addEventListener,window.postMessage);
        }
    }

    public static async GetIndex() : Promise<IndexView>{
        return await this.bridge!.request<IndexView>("GetIndex");
    }
}