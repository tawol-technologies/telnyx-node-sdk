import { IEndpoint } from "./interfaces";

export class ProductionEndpoints implements IEndpoint {
    baseUrl: string = 'https://api.telnyx.com/v2';
    messages: string = '/messages';
}