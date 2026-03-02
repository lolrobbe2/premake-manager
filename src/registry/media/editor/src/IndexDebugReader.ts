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
            this.bridge = new MessageBridge(window.addEventListener, vscode.postMessage);

        } else {
            this.bridge = new MessageBridge(window.addEventListener,window.postMessage);
        }

        this.bridge.on("GetIndex",this.OnGetIndex.bind(this));
    }

    public static OnGetIndex(data: any) : IndexView {
        console.log("test");
        return this.index;
    }
}