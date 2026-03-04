import HttpClient from '../../data/httpClient.js';
import { createDisplayVehicle, createHeader } from '../../scripts/dom.js';
import { Vehicle } from '../../models/vehicle.js';
import { HeadingEnums } from '../../models/enums.js';

const initApp = async () => {
  try {
    const vehicleId = location.search.split('=')[1];
    const vehicle = await loadVehicle(+vehicleId);
    createPageHeader(vehicle!);
    createDisplayVehicle(vehicle!);
  } catch (error) {
    createPageHeader("Hittade inget");
  }
};

const loadVehicle = async (id: number): Promise<Vehicle | null> => {
  return await new HttpClient('vehicles').findVehicle(+id) as Vehicle;
};

const createPageHeader = (vehicle: Vehicle | string) => {
  const pageHeader: HTMLElement | null = document.querySelector("main");

  if (!pageHeader) return;

  if (typeof vehicle === "string") {
    pageHeader?.prepend(createHeader(vehicle, HeadingEnums.H1, 'page-title center-text mt-3'));
  } else {
    pageHeader.prepend(createHeader(
      `${vehicle.manufacturer} ${vehicle.model}`,
      HeadingEnums.H1,
      'page-title center-text mt-3',
    ),);
  }
};


document.addEventListener('DOMContentLoaded', initApp);
