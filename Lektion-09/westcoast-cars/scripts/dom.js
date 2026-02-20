export const createCard = () => {
  const card = document.createElement('section');
  card.classList.add('card');
  return card;
};

export const createImage = (imageUrl, id) => {
  const image = document.createElement('img');
  image.setAttribute('src', imageUrl);
  image.setAttribute('id', id);
  return image;
};

export const createSpan = (text, className) => {
  const span = document.createElement('span');
  span.textContent = text;
  span.classList.add(className);
  return span;
};

export const createHeader = (text, headerType, classes) => {
  const header = document.createElement(headerType);
  header.setAttribute('class', classes);
  header.textContent = text;
  return header;
};

export const addImageNavigateClickHandler = (images, url) => {
  images.forEach((image) => {
    const id = image.getAttribute('id');
    image.addEventListener('click', () => {
      location.href = url + '?id=' + id;
    });
  });
};
