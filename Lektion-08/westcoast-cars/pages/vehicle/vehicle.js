const detailsArea = document.querySelector('#details-area');

const initApp = () => {
  // http://127.0.0.1:5500/pages/vehicle/vehicle-details.html?id=1
  const vehicleId = location.search.split('=')[1];
  console.log(vehicleId);
  getVehicle(vehicleId);
};

const getVehicle = (id) => {
  console.log(typeof id);
  const vehicle = vehicles.find((vehicle) => vehicle.id === +id);
  // const vehicle = vehicles.find((vehicle) => vehicle.id === Number(id));
  console.log(vehicle);
  const vehicleInfo = createDisplayVehicle();

  detailsArea.innerHTML = vehicleInfo;
};

const createDisplayVehicle = () => {
  let html = `
    <a class="goback" href="../gallery/gallery.html">
      <i class="fa-regular fa-arrow-left-long"></i>Tillbaka till
      galleriet</a
    >
    <section class="card">
      <img src="bildkälla" alt="" />
      <div class="info">
        <h2>Bilinfo</h2>
        <div>
          <span>Pris</span>
          <span>Bilens pris</span>
        </div>
        <div>
          <span>Årsmodell</span>
          <span>Bilens årsmodell</span>
        </div>
        <div>
          <span>Antal km</span>
          <span>Antal körda km</span>
        </div>
        <h3>Beskrivning</h3>
        <div class="description">Bilens beskrivning</div>
      </div>
    </section>
  `;

  return html;
};

document.addEventListener('DOMContentLoaded', initApp);
