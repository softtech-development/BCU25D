import { IHttpClient } from '../interfaces/IHttpClient';
import { settings } from '../config/env.js';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

export default class HttpClient<T> implements IHttpClient<T> {
  private _url: string;
  private _db: SupabaseClient;
  private _table: string;

  constructor (resource: string) {
    this._db = createClient(settings.BASE_URL, settings.API_KEY);
    console.log(this._db);
    this._table = resource;
  }

  async delete(id: string | number): Promise<void> {
    await this.deleteData(`${this._url}/${id}`);
  }

  async update(id: string | number, dataToUpdate: T): Promise<void> {
    await this.updateData(`${this._url}/${id}`, dataToUpdate);
  }

  async add(dataToAdd: T) {
    return await this.save(dataToAdd);
  }

  async find(id: number | string): Promise<T> {
    return await this.getData(`${this._url}/${id}`);
  }

  async listAll(): Promise<T> {
    return await this.getData();
  }

  private async getData(): Promise<T> {
    const { data, error } = await this._db
      .from(this._table)
      .select();

    if (error) {
      throw new Error(error.message);
    } else {
      return data as T;
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

  private async deleteData(url: string): Promise<void> {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "x-apikey": settings.API_KEY
      }
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
  }
}
