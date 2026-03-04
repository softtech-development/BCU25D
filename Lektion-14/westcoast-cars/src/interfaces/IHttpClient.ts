
export interface IHttpClient<T> {
    listAll(): Promise<T>;
    find(id: number): Promise<T>;
    add(data: T): Promise<T>;
}