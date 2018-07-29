
export class Requests {
    domain: string;

    constructor(domain: string) {
        if (domain.endsWith('/')) {
            domain = domain.slice(0, -1);
        }

        this.domain = domain;
    }

    async get (path: string, query: any): Promise<string> {

        let queryString: any = Object.keys(query)
            .map((key) => key + '=' + query[key])
            .join('&');

        let uri: string = this.domain + path + queryString;
        let response = await fetch(uri);

        return await response.text();
    }
}
