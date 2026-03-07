import type { IndexView } from "./IndexTypes";
import { MessageBridge } from "./MessageBridge";
import { getVsCodeApi } from "./vscode";

export class IndexDebugReader {

    private static bridge: MessageBridge | undefined;
    private static index: IndexView = {
        remote: "https://github.com/lolrobbe2/premake-common-registry",
        libraries: {
            madler: [
                {
                    name: "zlib",
                    description: "a massively spiffy yet delicately unobtrusive compression library (also free, not to mention unencumbered by patents)"
                }
            ],
            cyan4973: [
                {
                    name: "xxhash",
                    description: "extremely fast non-cryptographic hash algorithm"
                }
            ],
            nothings: [
                {
                    name: "stb",
                    description: "stb single-file public domain libraries for c/c++"
                }
            ],
            khronosgroup: [
                {
                    name: "vulkan-headers",
                    description: "vulkan header files and api registry"
                }
            ],
            zeux: [
                {
                    name: "volk",
                    description: "meta loader for vulkan api"
                }
            ],
            nemtrif: [
                {
                    name: "utfcpp",
                    description: "utf-8 with c++ in a portable way"
                }
            ]
        }
    };
    public static Initialize() : void{
        const vscode = getVsCodeApi();
        if(vscode !== undefined) {
            this.bridge = new MessageBridge((handler) => window.addEventListener('message', (event) => handler(event.data)), vscode.postMessage.bind(vscode));
        } else {
            this.bridge = new MessageBridge((handler) => window.addEventListener('message', (event) => handler(event.data)), window.postMessage.bind(window));
        }

        this.bridge.on("GetIndex",this.OnGetIndex.bind(this));
    }

    public static OnGetIndex(_: any) : IndexView {
        return this.index;
    }
}