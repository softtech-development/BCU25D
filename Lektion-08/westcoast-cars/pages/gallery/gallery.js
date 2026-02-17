import vehicles from '../../data/vehicle-data.js';
import {
  createCard,
  createImage,
  createSpan,
  addImageNavigateClickHandler,
} from '../../scripts/dom.js';

const gallery = document.querySelector('#vehicles-gallery');

const initApp = () => {
  const vehicles = loadVehicles();
  displayVehicles(vehicles);
};

const loadVehicles = () => {
  return vehicles;
};

const displayVehicles = (vehicles) => {
  vehicles.map((vehicle) => {
    const card = createCard();
    const image = createImage(vehicle.imageUrl, vehicle.id);
    const info = createSpan(
      `${vehicle.manufacturer} ${vehicle.model}`,
      'image-info',
    );

    card.appendChild(image);
    card.appendChild(info);
    gallery.appendChild(card);

    const images = document.querySelectorAll('.card img');
    addImageNavigateClickHandler(images, '../vehicle/vehicle-details.html');
  });
};

document.addEventListener('DOMContentLoaded', initApp);
