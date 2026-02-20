import { getVehicle } from '../../data/vehicle-data.js';
import { createHeader } from '../../scripts/dom.js';

const initApp = () => {
  const vehicleId = location.search.split('=')[1];
  const vehicle = getVehicle(vehicleId);

  document
    .querySelector('main')
    .prepend(
      createHeader(
        `${vehicle.manufacturer} ${vehicle.model}`,
        'h1',
        'page-title center-text mt-3',
      ),
    );

  createDisplayVehicle(vehicle);
};

const createDisplayVehicle = (vehicle) => {
  document.querySelector('#details-area').innerHTML = `
    <a class="goback" href="../gallery/gallery.html">
      <i class="fa-regular fa-arrow-left-long"></i>Tillbaka till
      galleriet</a
    >
    <section class="card">
      <img src="${vehicle.imageUrl}" alt="${vehicle.model}" />
      <div class="info">
        <h2>${vehicle.manufacturer} ${vehicle.model}</h2>
        <div>
          <span>Pris</span>
          <span>${vehicle.value}</span>
        </div>
        <div>
          <span>Årsmodell</span>
          <span>${vehicle.modelYear}</span>
        </div>
        <div>
          <span>Antal km</span>
          <span>${vehicle.mileage}</span>
        </div>
        <h3>Beskrivning</h3>
        <div class="description">${vehicle.description}</div>
      </div>
    </section>
  `;
};

document.addEventListener('DOMContentLoaded', initApp);
