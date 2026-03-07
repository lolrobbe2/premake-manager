
type Resolver = (value: any) => void;
type Rejecter = (reason?: any) => void;
type Handler = (data: any) => any;

interface PendingPromise {
    resolve: Resolver;
    reject: Rejecter;
}

interface BridgeResponse<T = any> {
    command: string;
    nonce: string;
    payload?: T;
    incomming: boolean;
    error?: any;
}
type MessageListener = (data: any) => void;
type AddEventListenerFn = (handler: MessageListener) => void;
type PostMessageFn = (message: any) => void;

export class MessageBridge {
    private postMessage: PostMessageFn | undefined;
    private pendingRequests = new Map<string, PendingPromise>();
    private handlers = new Map<string, Set<Handler>>();
    constructor(addEventListener: AddEventListenerFn, postMessage: PostMessageFn) {
        this.postMessage = postMessage
        addEventListener(async (data: BridgeResponse<any>) => {

            if (data.incomming === true) {
                //incomming message => call handler
                const commandHandlers = this.handlers.get(data.command);
                commandHandlers?.forEach(async (handler) => {
                    const result: BridgeResponse<any> = data;
                    result.incomming = false;

                    try {
                        result.payload = await handler(data);
                    } catch (error) {
                        result.payload = undefined;
                        result.error = error;
                    }
                    this.postMessage!(result);

                })
            } else {
                //resolve comand
                const promise = this.pendingRequests.get(data.nonce);
                if (data.error !== undefined) {
                    promise!.reject(data.error);
                } else {
                    promise?.resolve(data.payload);
                }
                this.pendingRequests.delete(data.nonce);
            }
        });
    }
    public on(command: string, handler: Handler): () => void {
        if (!this.handlers.has(command)) {
            this.handlers.set(command, new Set());
        }
        this.handlers.get(command)!.add(handler);

        return () => {
            this.handlers.get(command)?.delete(handler);
        };
    }
    /**
     * Sends a request to the host and returns a typed Promise.
     */
    public async request<TResponse = any, TData = any>(
        command: string,
        data?: TData
    ): Promise<TResponse> {
        const nonce = Math.random().toString(36).substring(2, 15);

        return new Promise((resolve, reject) => {
            this.pendingRequests.set(nonce, { resolve, reject });
            const incomming = true;
            this.postMessage!({ command, nonce, data, incomming });

            // Safety timeout
            setTimeout(() => {
                if (this.pendingRequests.has(nonce)) {
                    this.pendingRequests.delete(nonce);
                    //reject(new Error(`Timeout: ${command} (${nonce})`));
                }
            }, 5000);
        });
    }
}