import { IHttpClient } from '../interfaces/IHttpClient';
import { settings } from '../config/env.js';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

export default class HttpClient<T> implements IHttpClient<T> {
  private _db: SupabaseClient;
  private _table: string;

  constructor (resource: string) {
    this._db = createClient(settings.BASE_URL, settings.API_KEY);
    this._table = resource;
  }

  async delete(id: string | number): Promise<void> {
    await this.deleteData(id);
  }

  async update(id: string | number, dataToUpdate: T): Promise<void> {
    await this.updateData(id, dataToUpdate);
  }

  async add(dataToAdd: T) {
    return await this.save(dataToAdd);
  }

  async find(id: number | string): Promise<T> {
    return await this.getOne(+id);
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

  private async getOne(id: number): Promise<T> {
    const { data, error } = await this._db
      .from(this._table)
      .select()
      .eq("id", id)
      .single();

    if (error) {
      throw new Error(error.message);
    } else {
      return data as T;
    }
  }

  private async save(dataToAdd: T): Promise<T> {
    const { error, data } = await this._db
      .from(this._table)
      .insert(dataToAdd)
      .select();

    if (error) {
      throw new Error(error.message);
    } else {
      return data as T;
    }
  }

  private async updateData(id: number | string, data: T): Promise<void> {
    const { error } = await this._db
      .from(this._table)
      .update(data)
      .eq("id", id);

    if (error) {
      throw new Error(error.message);
    }
  }

  private async deleteData(id: number | string): Promise<void> {
    const { error } = await this._db
      .from(this._table)
      .delete()
      .eq("id", id);

    if (error) throw new Error(error.message);
  }
}
