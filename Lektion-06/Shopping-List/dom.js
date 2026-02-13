const createHtml = (groceryName) => {
  const li = document.createElement('li');
  li.textContent = groceryName;

  // Skapa en knapp och placera som barn till li elementet...
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('btn-delete');

  // Skapa en ikon som ska placeras i knappen
  // som ett barn...
  const icon = document.createElement('ion-icon');
  icon.setAttribute('name', 'trash-bin-outline');

  // Lägg till ikonen som ett barn till knappen...
  deleteButton.appendChild(icon);

  // Lägg till knappen till li elementet som ett barn...
  li.appendChild(deleteButton);

  return li;
};
