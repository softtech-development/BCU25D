
export interface IHttpClient<T> {
    listAll(): Promise<T>;
    find(id: number | string): Promise<T>;
    add(data: T): Promise<T>;
}