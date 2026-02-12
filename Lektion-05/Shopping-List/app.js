const form = document.querySelector('form');
const groceryInput = document.querySelector('#item-input');
const groceryList = document.querySelector('.items');
const clearButton = document.querySelector('#clear');
const filterInput = document.querySelector('#filter');
const saveButton = document.querySelector('form > button');

let isInEditMode = false;

const initApp = () => {};

const handleAddGrocery = (e) => {
  e.preventDefault();
  const grocery = groceryInput.value;

  if (grocery.length > 0) {
    if (isInEditMode) {
      const groceryToUpdate = groceryList.querySelector('.edit-mode');
      groceryToUpdate.classList.remove('.edit-mode');
      groceryToUpdate.remove();
      isInEditMode = false;
    }

    const li = document.createElement('li');
    li.textContent = grocery;

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
    groceryList.appendChild(li);

    groceryInput.value = '';

    saveButton.innerHTML =
      '<ion-icon name="add-circle-outline"></ion-icon> Lägg till';
    saveButton.classList.remove('btn-edit');
    saveButton.classList.add('btn');
  }
};

const clearGroceryList = () => {
  while (groceryList.firstChild) {
    groceryList.removeChild(groceryList.firstChild);
  }
};

const handleClickGroceryItem = (e) => {
  if (e.target.parentElement.classList.contains('btn-delete')) {
    e.target.parentElement.parentElement.remove();
  } else {
    isInEditMode = true;

    groceryList
      .querySelectorAll('li')
      .forEach((item) => item.classList.remove('edit-mode'));

    groceryInput.value = e.target.textContent;

    // Markera vilket LI som ska förändras...
    e.target.classList.add('edit-mode');

    saveButton.classList.add('btn-edit');
    saveButton.innerHTML =
      "<ion-icon name='create-outline'></ion-icon> Uppdatera";
  }
};

const handleFilterGroceries = (e) => {
  // 1. Vi måste hämta alla li elementen i vår lista...
  const groceries = document.querySelectorAll('li');
  // 2. Vi måste hämta in vad som skrivs i filterinput...
  const filterValue = e.target.value.toLowerCase();
  // 3. Loopa igenom groceries
  groceries.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();

    // itemName.indexOf(filterValue) != -1
    //   ? (item.style.display = 'flex')
    //   : (item.style.display = 'none');

    if (itemName.indexOf(filterValue) != -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
};

document.addEventListener('DOMContentLoaded', initApp);
form.addEventListener('submit', handleAddGrocery);
clearButton.addEventListener('click', clearGroceryList);
groceryList.addEventListener('click', handleClickGroceryItem);
filterInput.addEventListener('input', handleFilterGroceries);
