/***************************************************/
// Array.reduce()
/***************************************************/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Enkelt exempel...
// skapa en funktion som loopar igenom listan och summerar värdena.
/*
const calculateTotal = () => {
  let acc = 0;
  for (let number of numbers) {
    acc += number;
    // acc = acc + number;
  }
  return acc;
};

console.log(calculateTotal());

// Ett mer modernt sätt att utföra samma sak på...
const totalValue = numbers.reduce(
  (accValue, currentValue) => accValue + currentValue,
);
*/
/*
const testValue = numbers.reduce((accValue, currentValue) => {
  console.log(accValue, currentValue);
  return accValue + currentValue;
});

console.log(totalValue);
*/

// Mer verklighetstroget exempel...
// Skapa en kundvagn...
const cart = [
  { id: 1, product: 'Skruvdragare Dewalt', price: 2995, quantity: 1 },
  { id: 2, product: 'Cirkelsåg Dewalt', price: 4995, quantity: 2 },
  { id: 3, product: 'Spikpistol Milwakee', price: 9995, quantity: 1 },
];

console.log(cart);

const cartSum = cart.reduce((acc, product) => {
  return (acc += product.price);
}, 0);

console.log('Totalsumma kundvagn:', cartSum + 'SEK');

const totalArticles = cart.reduce((acc, product) => {
  return (acc += product.quantity);
}, 0);

console.log('Antal artiklar i kundvagn', totalArticles);

const cartTotalSum = cart.reduce((acc, product) => {
  return (acc += product.price * product.quantity);
}, 0);

console.log('Detta är totalsumman av ditt köp:', cartTotalSum);
