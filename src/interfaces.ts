export interface IEndpoint {
    baseUrl: string;
    messages: string;
}

export interface IResponse {
    statusCode: number;
    hasError: boolean;
    message: string;
    data: any;
}

export interface ISendMessageReq {
    from: string;
    to: string;
    text: string;
    subject: string;
}