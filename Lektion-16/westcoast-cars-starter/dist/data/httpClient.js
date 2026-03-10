import { settings } from '../config/env.js';
export default class HttpClient {
    // Private field...
    _url;
    constructor(resource) {
        this._url = settings.BASE_URL + resource;
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
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    "x-apikey": settings.API_KEY,
                    "cache-control": "no-cache"
                }
            });
            if (response.ok) {
                const result = await response.json();
                let data;
                if (Array.isArray(result)) {
                    data = result.map(vehicle => {
                        return {
                            ...vehicle,
                            id: vehicle._id
                        };
                    });
                    // Iterera igenom vår nya data struktur och ta bort _id.
                    data.map(v => {
                        delete v._id;
                        return v;
                    });
                }
                else {
                    data = { ...result, id: result._id };
                    delete data._id;
                }
                return data;
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