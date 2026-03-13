
export interface IHttpClient<T> {
    listAll(): Promise<T>;
    find(id: number | string): Promise<T>;
    add(data: T): Promise<T>;
    update(id: string | number, data: T): Promise<T>;
}