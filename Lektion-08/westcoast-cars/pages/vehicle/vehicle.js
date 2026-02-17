import { getVehicle } from '../../data/vehicle-data.js';
import { createHeader } from '../../scripts/dom.js';

const detailsArea = document.querySelector('#details-area');
const main = document.querySelector('main');
// const pageTitle = document.querySelector('#page-title');

const initApp = () => {
  const vehicleId = location.search.split('=')[1];
  const vehicle = getVehicle(vehicleId);
  const header = createHeader(
    `${vehicle.manufacturer} ${vehicle.model}`,
    'h1',
    'page-title center-text mt-3',
  );

  main.appendChild(header);
  detailsArea.innerHTML = createDisplayVehicle(vehicle);
};

const createDisplayVehicle = (vehicle) => {
  // pageTitle.innerText = `${vehicle.manufacturer} ${vehicle.model}`;

  const html = `
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

  return html;
};

document.addEventListener('DOMContentLoaded', initApp);
