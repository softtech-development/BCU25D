
export interface IHttpClient<T> {
    listAll(): Promise<T>;
    find(id: number | string): Promise<T>;
    add(dataToAdd: T): Promise<T>;
    update(id: string | number, dataToUpdate: T): Promise<void>;
}