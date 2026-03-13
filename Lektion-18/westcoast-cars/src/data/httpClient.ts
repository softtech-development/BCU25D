import { IHttpClient } from '../interfaces/IHttpClient';
import { settings } from '../config/env.js';
import { VehicleResponseType } from './responseTypes.js';

export default class HttpClient<T> implements IHttpClient<T> {
  private _url: string;

  constructor (resource: string) {
    this._url = settings.BASE_URL + resource;
  }

  async update(id: string | number, data: T): Promise<T> {
    return await this.updateData(`${this._url}/${id}`, data);
  }

  async add(data: T) {
    return await this.save(data);
  }

  async find(id: number | string): Promise<T> {
    return await this.getData(`${this._url}/${id}`);
  }

  async listAll(): Promise<T> {
    return await this.getData(this._url);
  }

  private async getData(url: string): Promise<T> {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          "x-apikey": settings.API_KEY,
          "cache-control": "no-cache"
        }
      });

      if (response.ok) {
        const result = await response.json() as VehicleResponseType[] | VehicleResponseType;
        let data;

        if (Array.isArray(result)) {
          data = result.map(vehicle => {
            return {
              ...vehicle,
              id: vehicle._id
            };
          });

          // Iterera igenom vår nya data struktur och ta bort _id.
          data.map(v => {
            delete v._id;
            return v;
          });
        } else {
          data = { ...result, id: result._id };
          delete data._id;
        }
        return data as T;
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
        "content-type": "application/json",
        "x-apikey": settings.API_KEY
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      return await response.json() as T;
    } else {
      throw new Error(response.statusText);
    }
  }

  private async updateData(url: string, data: T): Promise<T> {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        "x-apikey": settings.API_KEY
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
