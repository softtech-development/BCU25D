import HttpClient from '../helpers/HttpClient';
import Media from './Media';
import { MediaDetailsResponse } from './media-response';

export type GenreType = {
    name: string;
};

export default class MediaDetails extends Media {
    backgroundImage: string;
    overview: string;
    runtime: number;
    genres: GenreType[];

    constructor (resource: string) {
        super(resource);

        this.backgroundImage = '';
        this.overview = '';
        this.runtime = 0;
        this.genres = [];
    }

    async findMedia(id: number | string): Promise<MediaDetailsResponse> {
        return await new HttpClient<MediaDetailsResponse>(this._resource).find(id);
    }
}