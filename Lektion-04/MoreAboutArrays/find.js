/***************************************************/
// Array.find()
/***************************************************/
// const numbers = [1, 2, 3, 4, 5, 8, 6, 7, 8, 9, 10];

// Array.find() tar ett argument (predicate) == funktion...
// Om find() returnerar ett resultat om det finns något...

// 1.
/*
const found = numbers.find(function (number) {
  return number === 8;
});
console.log(found);
*/

// 2.
/*
const found = numbers.find((number) => number === 8);
console.log(found);
*/

console.log(vehicles);

const vehicle = vehicles.find((vehicle) => vehicle.id === 4);
console.log(vehicle);

const result = vehicles.find(
  (vehicle) => vehicle.registrationNumber === 'ABC123',
);
console.log(result);
