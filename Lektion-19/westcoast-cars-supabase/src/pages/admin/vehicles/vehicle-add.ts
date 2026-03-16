import { settings } from '../../../config/env.js';
import HttpClient from '../../../data/httpClient.js';
import { Vehicle } from '../../../models/vehicle';

const form = document.querySelector<HTMLFormElement>("form")!;

const submitVehicle = async (e: SubmitEvent) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.set("imageUrl", settings.NO_IMAGE);

    const data = Object.fromEntries(formData.entries()) as unknown;
    await new HttpClient<Vehicle>("vehicles").add(data as Vehicle);
    form.reset();
};

form.addEventListener("submit", submitVehicle);