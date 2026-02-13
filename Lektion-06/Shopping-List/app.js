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
  /* 
  // Skriva ner till localstorage (setItem(key,value))...
  localStorage.setItem('test', 'Kalle Anka');
  // Hämta ett värde ifrån en nyckel (getItem(key))...
  const value = localStorage.getItem('test');
  console.log(value); 
  
  const vehicle = {
    manufacturer: 'Volvo',
    model: 'XC60',
  };

  // Gör om vehicle till en sträng med hjälp av
  // JSON.strinfify och lagra resultatet i variabeln volvo....
  const volvo = JSON.stringify(vehicle);
  console.log(volvo);
  localStorage.setItem('vehicle', volvo);

  // Hämtar vi ut värdet(value) som finns i nyckeln vehicle...
  const car = localStorage.getItem('vehicle');
  // Vi får ut en sträng, vi behöver ett JavaScript objekt
  // Så vi använder JSON.parse(car) och tillbaka får vi ett JavaScript objekt...
  const transformedCar = JSON.parse(car);
  console.log('Car from localStorage', transformedCar);

  // Hantera listor(Arrayer) i localStorage...
  const vehicles = [
    {
      manufacturer: 'Volvo',
      model: 'XC60',
    },
    {
      manufacturer: 'Fiat',
      model: 'Uno',
    },
  ];

  localStorage.setItem('vehicles', JSON.stringify(vehicles));
  console.log('Våra bilar', JSON.parse(localStorage.getItem('vehicles')));
  */

  const items = localStorage.getItem('groceries');
  // Vi måste vara defensiva. Kontroller så att vi fick något tillbaka...
  if (items !== null) {
    // Om vi har lagra varor läs in det som en array av strängar...
    const groceries = JSON.parse(items);

    // Loopa igenom alla element(varor) i listan och skapa html element för respektive vara...
    groceries.forEach((grocery) => {
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
    });
  }
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
      isInEditMode = false;
    }

    // Kontrollera så att vi inte försöker skapa dubbletter...
    if (groceryList.querySelector('li') !== null) {
      /* const list = groceryList.querySelectorAll('li');
      const listOfGroceries = Array.from(list); */
      const groceries = Array.from(groceryList.querySelectorAll('li'));

      if (
        groceries.find(
          (item) =>
            item.innerText.toLowerCase() === groceryInput.value.toLowerCase(),
        )
      ) {
        // Vad gör vi om det redan finns en vara i listan?
        // 1. Sätt korrekt text i meddelande elementet i dialogrutan...
        // 2. Visa dialogrutan...
        // 3. Sätt inmatningsfältet (Ange vara) till en tom sträng
        // 4. Avbryta exekvering av applikationen.
        modalDialog.querySelector('#message').innerHTML =
          `<h1><i>${groceryInput.value} finns redan i listan.</i></h1>`;
        modalDialog.showModal();
        groceryInput.value = '';
        return;
      }
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

    saveButton.innerHTML =
      '<ion-icon name="add-circle-outline"></ion-icon> Lägg till';
    saveButton.classList.remove('btn-edit');
    saveButton.classList.add('btn');

    // Lagra varan till localStorage...
    // // Vi börjar väldigt enkelt...
    // localStorage.setItem('groceries', groceryInput.value);
    // Nu gör vi det på korrekt sätt...
    let items = localStorage.getItem('groceries');
    if (items === null) {
      items = [];
    } else {
      items = JSON.parse(localStorage.getItem('groceries'));
    }
    items.push(groceryInput.value);
    // Skriv information till localStorage...
    localStorage.setItem('groceries', JSON.stringify(items));
    groceryInput.value = '';
  }
};

const clearGroceryList = () => {
  while (groceryList.firstChild) {
    groceryList.removeChild(groceryList.firstChild);
  }

  // Töm/radera localStorage, tar nyckeln(key)
  localStorage.removeItem('groceries');
};

const handleClickGroceryItem = (e) => {
  if (e.target.parentElement.classList.contains('btn-delete')) {
    e.target.parentElement.parentElement.remove();

    // Hämta ut listan groceries ifrån localStorage...
    let items = localStorage.getItem('groceries');
    // Kontrollera om vi hade något i localStorage...
    if (items !== null) {
      items = JSON.parse(items);
      console.log('Ursprunglig lista', items);
      // Placka bara ut de elementen som vi vill ha kvar...
      let groceries = items.filter(
        (item) => item !== e.target.parentElement.parentElement.innerText,
      );
      console.log('Nya filtrerade listan', groceries);

      localStorage.setItem('groceries', JSON.stringify(groceries));
    }
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
