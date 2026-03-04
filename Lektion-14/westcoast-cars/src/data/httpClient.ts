import { IHttpClient } from '../interfaces/IHttpClient';
import { Post } from '../models/post';
import { Vehicle } from '../models/vehicle';

export default class HttpClient implements IHttpClient {
  private baseUrl: string = 'http://localhost:3000';

  constructor (resource: string) {
    this.baseUrl = `${this.baseUrl}/${resource}`;
  }

  async listAllVehicles(): Promise<Vehicle[] | Vehicle> {
    return await this.getData(this.baseUrl);
  }

  async findVehicle(id: number): Promise<Vehicle[] | Vehicle> {
    return await this.getData(`${this.baseUrl}/${id}`);
  }

  async addPost(post: Post) {
    const response = await fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    });

    if (response.ok) {
      console.log("Tack för din förfrågan");
    }
  }

  private async getData(url: string): Promise<Vehicle[] | Vehicle> {
    try {
      const response = await fetch(url);

      if (response.ok) {
        return await response.json();
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    } catch (error) {
      throw error;
    }
  }
}
