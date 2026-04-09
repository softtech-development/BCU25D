import HttpClient from '../../../data/httpClient.js';
import { Vehicle } from '../../../models/vehicle.js';

const overlay = document.querySelector<HTMLDivElement>("#overlay")!;
const dialog = document.querySelector<HTMLDivElement>("#modal")!;
const spinner = document.querySelector<HTMLDivElement>("#spinner")!;
const vehicleDisplay = document.querySelector<HTMLDivElement>("#vehicles")!;

let _vehicle: Vehicle;

const initApp = async () => {
    const vehicles = await listAllVehicles();
    displayVehicles(vehicles);
    vehicleDisplay.classList.add("show");
};

const listAllVehicles = async (): Promise<Vehicle[]> => {
    spinner && spinner.classList.add("loader");
    return await new HttpClient<Vehicle[]>("vehicles").listAll();
};

const displayVehicles = (vehicles: Vehicle[]) => {
    while (vehicleDisplay.firstChild) {
        vehicleDisplay.removeChild(vehicleDisplay.firstChild);
    }

    vehicles.map((vehicle: Vehicle) => {
        const row = document.createElement("section");

        const icon = document.createElement("i");
        icon.classList.add("fa-light");
        icon.classList.add("fa-pen-to-square");
        icon.addEventListener("click", (e) => displayVehicle(e, vehicle.id + ''));

        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fa-light");
        deleteIcon.classList.add("fa-trash-can");
        deleteIcon.classList.add("danger");
        deleteIcon.addEventListener("click", (e) => deleteVehicle(e, vehicle.id));

        row.appendChild(icon);
        row.appendChild(document.createElement("div")).appendChild(document.createTextNode(vehicle.manufacturer));
        row.appendChild(document.createElement("div")).appendChild(document.createTextNode(vehicle.model));
        row.appendChild(document.createElement("div")).appendChild(document.createTextNode(vehicle.modelYear.toString()));
        row.appendChild(document.createElement("div")).appendChild(document.createTextNode(vehicle.mileage.toLocaleString("sv-SE")));
        row.appendChild(document.createElement("div")).appendChild(document.createTextNode(vehicle.value.toLocaleString("sv-SE")));
        row.appendChild(deleteIcon);

        vehicleDisplay.appendChild(row);
    });

    spinner && spinner.classList.remove("loader");
};

const displayVehicle = async (e: PointerEvent, id: string) => {
    e.preventDefault();
    const form = document.querySelector<HTMLFormElement>("form")!;

    _vehicle = await new HttpClient<Vehicle>("vehicles").find(id);

    overlay.classList.add("show");
    dialog.classList.add("show");

    populateModal(_vehicle, form);

    const closeButton = form.querySelector<HTMLButtonElement>("#closeModal")!;
    closeButton.addEventListener("click", (e) => {
        e.preventDefault();
        overlay.classList.remove("show");
        dialog.classList.remove("show");
    });

    form.addEventListener("submit", updateVehicle);

};

const populateModal = (vehicle: Vehicle, form: HTMLFormElement) => {
    form.manufacturer.value = vehicle.manufacturer;
    form.model.value = vehicle.model;
    form.modelYear.value = vehicle.modelYear;
    form.mileage.value = vehicle.mileage;
    form.value.value = vehicle.value;
};

const deleteVehicle = async (e: PointerEvent, id: number) => {
    e.preventDefault();

    await new HttpClient("vehicles").delete(id);

    const vehicles = await listAllVehicles();
    displayVehicles(vehicles);
};

const updateVehicle = async (e: SubmitEvent) => {
    e.preventDefault();

    const form = document.querySelector<HTMLFormElement>("form")!;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries()) as unknown;

    await new HttpClient<Vehicle>("vehicles").update(_vehicle.id, data as Vehicle);

    overlay.classList.remove("show");
    dialog.classList.remove("show");

    const vehicles = await listAllVehicles();
    displayVehicles(vehicles);
};

document.addEventListener("DOMContentLoaded", initApp);