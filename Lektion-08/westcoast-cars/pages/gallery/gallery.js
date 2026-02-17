const gallery = document.querySelector('#vehicles-gallery');

const initApp = () => {
  loadVehicles();
};

const loadVehicles = () => {
  displayVehicles(vehicles);
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

const createCard = () => {
  const card = document.createElement('section');
  card.classList.add('card');
  return card;
};

const createImage = (imageUrl, id) => {
  const image = document.createElement('img');
  image.setAttribute('src', imageUrl);
  image.setAttribute('id', id);
  return image;
};

const createSpan = (text, className) => {
  const span = document.createElement('span');
  span.textContent = text;
  span.classList.add(className);
  return span;
};

const addImageNavigateClickHandler = (images, url) => {
  images.forEach((image) => {
    const id = image.getAttribute('id');
    image.addEventListener('click', () => {
      location.href = url + '?id=' + id;
    });
  });
};

document.addEventListener('DOMContentLoaded', initApp);
