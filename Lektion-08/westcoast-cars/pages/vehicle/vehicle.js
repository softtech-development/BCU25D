const detailsArea = document.querySelector('#details-area');
const pageTitle = document.querySelector('#page-title');

const initApp = () => {
  // http://127.0.0.1:5500/pages/vehicle/vehicle-details.html?id=1
  const vehicleId = location.search.split('=')[1];
  console.log(vehicleId);
  getVehicle(vehicleId);
};

const getVehicle = (id) => {
  const vehicle = vehicles.find((vehicle) => vehicle.id === +id);
  pageTitle.innerText = `${vehicle.manufacturer} ${vehicle.model}`;
  // pageTitle.innerText = vehicle.manufacturer + ' ' + vehicle.model;
  // const vehicle = vehicles.find((vehicle) => vehicle.id === Number(id));
  const vehicleInfo = createDisplayVehicle(vehicle);

  detailsArea.innerHTML = vehicleInfo;
};

const createDisplayVehicle = (vehicle) => {
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
