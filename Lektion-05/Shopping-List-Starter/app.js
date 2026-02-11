// Hämta in refenser till dom element högst upp i javascript filen
// endast en gång...
const form = document.querySelector('form');
const input = document.querySelector('#item-input');
// document.getElementById('item-input');
const groceryList = document.querySelector('.items');

const initApp = () => {};

const handleAddGrocery = (e) => {
  e.preventDefault();
  const grocery = input.value;

  if (grocery.length > 0) {
    // Skapa ett element med texten ifrån input.value
    // och placera i listan...
    const li = document.createElement('li');
    // Lägg in texten ifrån input elementet
    li.textContent = grocery;
    // Lägger till vår ny listitem element till listan(<ul>)
    groceryList.appendChild(li);
    // Töm input elementet...
    input.value = '';
  }
};

document.addEventListener('DOMContentLoaded', initApp);
form.addEventListener('submit', handleAddGrocery);
