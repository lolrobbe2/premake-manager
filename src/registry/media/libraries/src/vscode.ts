// vscode.ts

// 1. Tell TS that our window has a custom property
declare global {
    interface Window {
        _vscodeApi?: any;
    }
}

declare function acquireVsCodeApi<T = any>(): any;

export function getVsCodeApi() {
    // 2. Check the window object first
    if (!window._vscodeApi) {
        if (typeof acquireVsCodeApi !== 'undefined') {
            // 3. This is the ONLY place this is ever called
            window._vscodeApi = acquireVsCodeApi();
        } else {
            window._vscodeApi = {
                postMessage: (msg: any) => console.log("Mock PostMessage:", msg),
                setState: (_: any) => { },
                getState: () => ({})
            };
        }
    }
    return window._vscodeApi;
}