import HttpClient from '../helpers/HttpClient';
import { MediaResponse } from './media-response';

export default class Media {
    protected _resource: string;
    id: Number;
    title: string;
    language: string;
    poster: string;
    releaseDate: string;
    rating: number;

    constructor (resource: string) {
        this._resource = resource;
        this.id = 0;
        this.title = "";
        this.language = "";
        this.poster = "";
        this.releaseDate = "";
        this.rating = 0.00;
    }

    async listMedia(): Promise<MediaResponse> {
        return await new HttpClient<MediaResponse>(this._resource).listAll();
    }
}