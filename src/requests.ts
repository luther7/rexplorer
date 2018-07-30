
export default class Requests {
    private domain: string;

    constructor(domain: string) {
        if (domain.endsWith('/')) {
            domain = domain.slice(0, -1);
        }

        this.domain = domain;
    }

    // public async get (path: string, query: any): Promise<string> {
        // let queryString: any = Object.keys(query)
        //     .map((key) => key + '=' + query[key])
        //     .join('&');

        // let uri: string = this.domain + path + queryString;

    public async get(path: string): Promise<string> {
        const uri: string = this.domain + '/' + path;
        const response = await fetch(uri);

        return await response.text();
    }
}
