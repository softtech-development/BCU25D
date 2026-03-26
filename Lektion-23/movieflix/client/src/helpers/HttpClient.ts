import { IHttpClient } from '../interfaces/IHttpClient';

export default class HttpClient<T> implements IHttpClient<T> {
    private _url: string;

    constructor (resource: string) {
        this._url = import.meta.env.VITE_BASE_URL + "/" + resource;
    }

    async listAll(): Promise<T> {
        try {
            const response = await fetch(this._url);

            if (response.ok) {
                return await response.json() as T;
            } else {
                throw new Error(response.statusText);
            }
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async find(id: number | string): Promise<T> {
        throw new Error('Method not implemented.');
    }

}