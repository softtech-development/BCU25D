export default class HttpClient {
    // Private field...
    _url;
    constructor(resource) {
        this._url = "http://localhost:3000/" + resource;
    }
    async add(data) {
        return await this.save(data);
    }
    async find(id) {
        return await this.getData(`${this._url}/${id}`);
    }
    async listAll() {
        return await this.getData(this._url);
    }
    async getData(url) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                return await response.json();
            }
            else {
                throw new Error(`${response.status} ${response.statusText}`);
            }
        }
        catch (error) {
            throw error;
        }
    }
    async save(data) {
        const response = await fetch(this._url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            return await response.json();
        }
        else {
            throw new Error(response.statusText);
        }
    }
}
//# sourceMappingURL=httpClient.js.map