export type MediaResponse = {
    success: boolean,
    statusCode: string,
    page: number | undefined,
    items: number | undefined,
    data: any[];
};