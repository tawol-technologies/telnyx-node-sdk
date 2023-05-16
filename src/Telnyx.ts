import { DevEndpoints } from "./DevEndpoints";
import { ProductionEndpoints } from "./ProdEndpoints";
import { IEndpoint, IResponse, ISendMessageReq } from "./interfaces";
import { TEnv } from "./types";

export default class Telnyx {
    private Endpoints: IEndpoint;
    private apiKey: string;
    private publicKey: string;

    constructor(env: TEnv, apikey: string, publicKey: string) {
        this.Endpoints = env === "Production"? new ProductionEndpoints() : new DevEndpoints();
        this.apiKey = apikey;
        this.publicKey = publicKey;
    }

    private async sendRequest(path: string, payload: ISendMessageReq, method?: 'POST' | 'GET'): Promise<IResponse> {
        const caller = await fetch(this.Endpoints.baseUrl+path,
            {
            method: method ?? 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`
            },
            body: JSON.stringify(payload)
        });
        const data = await caller.json();
        if (!caller.ok) {
            return {
                hasError: true,
                message: 'Cannot complete your request at the moment',
                statusCode: caller.status,
                data: data
            };
        }
        return {
            hasError: false,
            message: 'Sent',
            statusCode: caller.status,
            data: data
        };
    }

    async sendMessage(payload: ISendMessageReq): Promise<IResponse> {
        return this.sendRequest(this.Endpoints.messages, payload);
    }
}
