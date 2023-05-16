import { IEndpoint } from "./interfaces";

export class DevEndpoints implements IEndpoint{
    baseUrl: string = 'https://api.telnyx.com/v2';
    messages: string = '/messages';
}