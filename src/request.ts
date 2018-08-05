import axios, { AxiosResponse } from 'axios';

interface Response extends AxiosResponse { text: string; }

export default class Request {
    public static async execute(rawRequest: string): Promise<object> {
        const config = this.parse(rawRequest);
        const axiosResponse: AxiosResponse = await axios.request(config);

        const response: Response = {
            ...axiosResponse,
            text: JSON.stringify(axiosResponse.data),
        };

        return response;
    }

    private static readonly validMethods: string[] = [ 'GET', 'POST' ];

    private static parse(rawRequest: string): object {
        const split: string[] = rawRequest.split(/[ ]+/);
        if (split.length !== 2) {
            throw new Error('Invalid request format');
        }

        const method: string = split[0].toUpperCase().trim();
        if (!this.validMethods.includes(method)) {
            throw new Error('Invalid method: ' + method);
        }

        const url: string = split[1].trim();
        if (url === '') {
            throw new Error('No url given');
        }

        return { method, url };
    }
}
