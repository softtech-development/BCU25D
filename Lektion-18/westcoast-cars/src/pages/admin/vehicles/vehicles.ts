import HttpClient from '../../../data/httpClient.js';
import { Vehicle } from '../../../models/vehicle.js';

const overlay = document.querySelector<HTMLDivElement>("#overlay")!;
const dialog = document.querySelector<HTMLDivElement>("#modal")!;

const initApp = async () => {
    const vehicles = await listAllVehicles();
    console.log(vehicles);
    displayVehicles(vehicles);
};

const listAllVehicles = async (): Promise<Vehicle[]> => {
    return await new HttpClient<Vehicle[]>("vehicles").listAll();
};

const displayVehicles = (vehicles: Vehicle[]) => {
    const vehicleDisplay = document.querySelector<HTMLDivElement>("#vehicles")!;
    vehicleDisplay.innerHTML = "";

    vehicles.map((vehicle: Vehicle) => {
        const row = document.createElement("section");

        const icon = document.createElement("i");
        icon.classList.add("fa-light");
        icon.classList.add("fa-pen-to-square");
        icon.setAttribute("id", vehicle.id.toString());
        icon.addEventListener("click", displayVehicle);

        row.appendChild(icon);

        row.appendChild(document.createElement("div")).appendChild(document.createTextNode(vehicle.manufacturer));
        row.appendChild(document.createElement("div")).appendChild(document.createTextNode(vehicle.model));
        row.appendChild(document.createElement("div")).appendChild(document.createTextNode(vehicle.modelYear.toString()));
        row.appendChild(document.createElement("div")).appendChild(document.createTextNode(vehicle.mileage.toLocaleString("sv-SE")));
        row.appendChild(document.createElement("div")).appendChild(document.createTextNode(vehicle.value.toLocaleString("sv-SE")));

        vehicleDisplay.appendChild(row);
    });
};

const displayVehicle = async (e: PointerEvent) => {
    e.preventDefault();
    const form = document.querySelector<HTMLFormElement>("form")!;
    const icon = e.target as HTMLElement;
    const vehicleId = icon.getAttribute("id") as string;
    const vehicle = await new HttpClient<Vehicle>("vehicles").find(vehicleId);

    overlay.classList.add("show");
    dialog.classList.add("show");

    populateModal(vehicle, form);

    const closeButton = form.querySelector<HTMLButtonElement>("#closeModal")!;
    closeButton.addEventListener("click", (e) => {
        e.preventDefault();
        overlay.classList.remove("show");
        dialog.classList.remove("show");
    });

    form.addEventListener("submit", (e) => { updateVehicle(e, form, vehicleId); });

};

const populateModal = (vehicle: Vehicle, form: HTMLFormElement) => {
    form.manufacturer.value = vehicle.manufacturer;
    form.model.value = vehicle.model;
    form.modelYear.value = vehicle.modelYear;
    form.mileage.value = vehicle.mileage;
    form.value.value = vehicle.value;
};

const updateVehicle = async (e: SubmitEvent, form: HTMLFormElement, vehicleId: string) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.set("id", vehicleId);

    const data = Object.fromEntries(formData.entries()) as unknown;

    await new HttpClient<Vehicle>("vehicles").update(vehicleId, data as Vehicle);

    overlay.classList.remove("show");
    dialog.classList.remove("show");

    await listAllVehicles();
};

document.addEventListener("DOMContentLoaded", initApp);