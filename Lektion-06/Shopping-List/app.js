const form = document.querySelector('form');
const groceryInput = document.querySelector('#item-input');
const groceryList = document.querySelector('.items');
const clearButton = document.querySelector('#clear');
const filterInput = document.querySelector('#filter');
const saveButton = document.querySelector('form > button');
const modalDialog = document.querySelector('dialog');

modalDialog
  .querySelector('#close-modal')
  .addEventListener('click', () => modalDialog.close());

let isInEditMode = false;

const initApp = () => {
  const groceries = getFromStorage('groceries');
  groceries.forEach((grocery) => groceryList.appendChild(createHtml(grocery)));
  updateUI();
};

const handleAddGrocery = (e) => {
  e.preventDefault();
  const grocery = groceryInput.value;

  if (grocery.length === 0) {
    modalDialog.querySelector('#message').textContent = 'Måste ange vara!';
    modalDialog.showModal();
    return;
  }

  if (grocery.length > 0) {
    if (isInEditMode) {
      const groceryToUpdate = groceryList.querySelector('.edit-mode');
      groceryToUpdate.classList.remove('.edit-mode');
      groceryToUpdate.remove();

      removeFromStorage(groceryToUpdate.innerText, 'groceries');

      isInEditMode = false;
    }

    if (groceryList.querySelector('li') !== null) {
      const groceries = Array.from(groceryList.querySelectorAll('li'));

      if (
        groceries.find(
          (item) =>
            item.innerText.toLowerCase() === groceryInput.value.toLowerCase(),
        )
      ) {
        modalDialog.querySelector('#message').innerHTML =
          `<h1><i>${groceryInput.value} finns redan i listan.</i></h1>`;
        modalDialog.showModal();
        updateUI();
        return;
      }
    }

    groceryList.appendChild(createHtml(grocery));

    saveButton.innerHTML =
      '<ion-icon name="add-circle-outline"></ion-icon> Lägg till';
    saveButton.classList.remove('btn-edit');
    saveButton.classList.add('btn');

    addToStorage(groceryInput.value, 'groceries');
    updateUI();
  }
};

const clearGroceryList = () => {
  while (groceryList.firstChild) {
    groceryList.removeChild(groceryList.firstChild);
  }
  clearStorage('groceries');
  updateUI();
};

const handleClickGroceryItem = (e) => {
  if (groceryList.children.length === 0) {
    return;
  }

  if (e.target.parentElement.classList.contains('btn-delete')) {
    e.target.parentElement.parentElement.remove();

    removeFromStorage(
      e.target.parentElement.parentElement.innerText,
      'groceries',
    );

    if (groceryList.children.length === 0) {
      clearStorage('groceries');
      updateUI();
    }
  } else {
    isInEditMode = true;

    groceryList
      .querySelectorAll('li')
      .forEach((item) => item.classList.remove('edit-mode'));

    groceryInput.value = e.target.textContent;

    e.target.classList.add('edit-mode');

    saveButton.classList.add('btn-edit');
    saveButton.innerHTML =
      "<ion-icon name='create-outline'></ion-icon> Uppdatera";
  }
};

const handleFilterGroceries = (e) => {
  const groceries = document.querySelectorAll('li');
  const filterValue = e.target.value.toLowerCase();
  groceries.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();

    if (itemName.indexOf(filterValue) != -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
};

const updateUI = () => {
  groceryInput.value = '';
  groceryList.children.length === 0
    ? (clearButton.style.display = 'none')
    : (clearButton.style.display = 'block');
};

document.addEventListener('DOMContentLoaded', initApp);
form.addEventListener('submit', handleAddGrocery);
clearButton.addEventListener('click', clearGroceryList);
groceryList.addEventListener('click', handleClickGroceryItem);
filterInput.addEventListener('input', handleFilterGroceries);
