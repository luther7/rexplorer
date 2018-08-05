import axios from 'axios';

export default class Requests {
    public async get(uri: string)  {
        try {
            const response = await axios.get(
                uri,
            );

            return JSON.stringify(response.data);
        } catch (exception) {
            return 'error';
        }
    }

    private formQueryString(query: any): string {
        return Object.keys(query).map((key) => key + '=' + query[key]).join('&');
    }
}
