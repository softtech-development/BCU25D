import { Vehicle } from '../models/vehicle';

export interface IHttpClient {
    listAllVehicles(): Promise<Vehicle[] | Vehicle>;
    findVehicle(id: number): Promise<Vehicle[] | Vehicle>;
}