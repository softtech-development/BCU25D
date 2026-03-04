import HttpClient from '../../data/httpClient.js';
import {
  createCard,
  createImage,
  createSpan,
  addImageNavigateClickHandler,
} from '../../scripts/dom.js';

import { Vehicle } from '../../models/vehicle.js';

const gallery = document.querySelector('#vehicles-gallery');

const initApp = async () => {
  try {
    displayVehicles(await new HttpClient('vehicles').listAllVehicles() as Vehicle[]);
  } catch (error) {
    console.error(error);
  }
};

const displayVehicles = (vehicles: Vehicle[]) => {
  vehicles.map((vehicle: Vehicle) => {
    const card: HTMLElement = createCard();
    const image: HTMLImageElement = createImage(vehicle.imageUrl, vehicle.id.toString());
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
};

document.addEventListener('DOMContentLoaded', initApp);
