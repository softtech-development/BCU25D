import { IHttpClient } from '../interfaces/IHttpClient';
export default class HttpClient<T> implements IHttpClient<T> {
  // Private field...
  private _url: string;

  constructor (resource: string) {
    this._url = "http://localhost:3000/" + resource;
  }

  async add(data: T) {
    return await this.save(data);
  }

  async find(id: number): Promise<T> {
    return await this.getData(`${this._url}/${id}`);
  }

  async listAll(): Promise<T> {
    return await this.getData(this._url);
  }

  private async getData(url: string): Promise<T> {
    try {
      const response = await fetch(url);

      if (response.ok) {
        return await response.json() as T;
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    } catch (error) {
      throw error;
    }
  }

  private async save(data: T): Promise<T> {
    const response = await fetch(this._url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      return await response.json() as T;
    } else {
      throw new Error(response.statusText);
    }
  }
}
