
export default class Fetch {
    private domain: string;

    constructor(domain: string) {
        this.domain = this.trimSlashes(domain);
    }

    // public async get (path: string, query: any): Promise<string> {
    //     const queryString: string = this.formQueryString(query);
    public async get(path: string): Promise<string> {
        const uri: string = this.domain + '/' + this.trimSlashes(path);
        const response = await fetch(uri);

        return await response.text();
    }

    private trimSlashes(input: string): string {
        if (input.startsWith('/')) {
            input = input.slice(1);
        }

        if (input.endsWith('/')) {
            input = input.slice(0, -1);
        }

        return input;
    }

    private formQueryString(query: any): string {
        return Object.keys(query).map((key) => key + '=' + query[key]).join('&');
    }
}
