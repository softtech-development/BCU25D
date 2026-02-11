/***************************************************/
// Array.filter()
/***************************************************/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Plocka alla jämna tal och presentera dem...
// 1. Via en forEach loop...
/*
const evenNumbers = [];
numbers.forEach((number) => {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
});
console.log('Original listan', numbers);
console.log('Jämna tal', evenNumbers);
*/

// 2. Använd filter() funktionen
/*  
    Array.filter() funktionen tar ett predicate(villkor, funktion)
*/

/*
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log('EvenNumbers:', evenNumbers);
console.log('Numbers:', numbers);
*/

console.log(vehicles);
const mercedes = vehicles.filter(
  (vehicle) => vehicle.manufacturer.toLowerCase() === 'mercedes',
);
console.log('Mercedes i lager:', mercedes);

const interestingVehicles = vehicles.filter(
  (vehicle) => vehicle.modelYear > 2016,
);
console.log(interestingVehicles);

const lowMileage = vehicles.filter((vehicle) => vehicle.mileage < 100000);
console.log(lowMileage);

const fancyVehicles = vehicles.filter(
  (vehicle) =>
    vehicle.manufacturer.toLowerCase() === 'mercedes' &&
    vehicle.modelYear > 2016 &&
    vehicle.mileage < 100000,
);
console.log(fancyVehicles);
