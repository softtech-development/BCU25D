import { IVehicle } from '../models/vehicle';

export interface IHttpClient {
    listAllVehicles(): Promise<IVehicle[] | IVehicle>;
    findVehicle(id: number): Promise<IVehicle[] | IVehicle>;
}