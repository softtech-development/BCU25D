/*****************************************************/
// Iterera i listor (loopar)
// JavaScript har 3 huvudsakliga varianter på
// iterationer
// 1. for i loopen
// 2. for of loopen
// 3. forEach loopen(finns i två varianter)
/*****************************************************/

/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 1. for i loopen den gamla traditionella loopen...
console.log('------- for i loopen -----------');
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log('------- backwards 1 -----------');
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}

console.log('------- backwards 2 -----------');
for (let i = numbers.at(-2); i >= 0; i--) {
  console.log(numbers[i]);
}

// for of loopen...
console.log('------- for of loopen ----------');
for (let number of numbers) {
  console.log(number);
}

// 3. forEach, finns i två varianter
// forEach måste ha en funktion som utför arbetet
// som ska göras i loopen...

// Variant 1.
console.log('------ forEach loopen 1 -------');
numbers.forEach(function (number, index) {
  //   console.log(number, 'index:', index);
  console.log(number);
});

console.log('------ forEach loopen 2 -------');
numbers.forEach((number, index) => {
  //   console.log(number, 'index:', index);
  console.log(number);
});
*/

console.log('Playing with Vehicles');

/*
for (let i = 0; i < vehicles.length; i++) {
  console.log(vehicles[i].manufacturer);
  //   console.log(vehicles[i]);
}
*/
/*
for (let vehicle of vehicles) {
  console.log(vehicle.manufacturer, vehicle.model);
  //   console.log(vehicle);
}
*/

vehicles.forEach((vehicle) => {
  console.log(vehicle.manufacturer, vehicle.model);
});
// vehicles.forEach((vehicle, index) => {
//   console.log(vehicle.manufacturer, vehicle.model, 'index:', index);
// });
