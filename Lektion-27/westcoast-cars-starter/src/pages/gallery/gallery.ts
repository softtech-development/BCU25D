import HttpClient from '../../data/httpClient.js';
import {
  createCard,
  createImage,
  createSpan,
  addImageNavigateClickHandler,
} from '../../scripts/dom.js';

import { Vehicle } from '../../models/vehicle.js';

const gallery = document.querySelector('#vehicles-gallery');
const spinner = document.querySelector("#spinner");

const initApp = async () => {
  try {
    spinner && spinner.classList.add("loader");
    displayVehicles(await new HttpClient<Vehicle[]>('vehicles').listAll());
  } catch (error) {
    console.error(error);
  }
};

const displayVehicles = (vehicles: Vehicle[]) => {
  vehicles.map((vehicle: Vehicle) => {
    const card: HTMLElement = createCard();
    const image: HTMLImageElement = createImage(vehicle.imageUrl, vehicle.id);
    const info: HTMLSpanElement = createSpan(
      `${vehicle.manufacturer} ${vehicle.model}`,
      'image-info',
    );

    card.appendChild(image);
    card.appendChild(info);

    if (gallery) {
      gallery.appendChild(card);
      const images: HTMLImageElement[] = [...document.querySelectorAll('.card img')] as HTMLImageElement[];
      // const images: HTMLImageElement[] = Array.from(document.querySelectorAll('.card img'));
      addImageNavigateClickHandler(images, '../vehicle/vehicle-details.html');
    }
  });
  spinner && spinner.classList.remove("loader");
};

document.addEventListener('DOMContentLoaded', initApp);
