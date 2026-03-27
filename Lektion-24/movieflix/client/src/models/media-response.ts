import Media from './Media';
import MediaDetails from './MediaDetails';

export type MediaResponse = {
    success: boolean,
    statusCode: string,
    page: number | undefined,
    items: number | undefined,
    data: Media[];
};

export type MediaDetailsResponse = {
    success: boolean,
    statusCode: string,
    movie: MediaDetails;
};