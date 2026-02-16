const initApp = () => {
  const vehicleId = location.search.split('=')[1];
  console.log(vehicleId);
};

document.addEventListener('DOMContentLoaded', initApp);
