export type Vehicle = {
    id: number,
    registrationNumber?: string,
    manufacturer: string;
    model: string;
    modelYear: number | string;
    mileage: number | string;
    value: number | string;
    imageUrl: string;
    description: string;
};
