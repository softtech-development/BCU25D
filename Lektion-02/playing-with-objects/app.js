/* 
    Ett objekt är ett sätt att organisera eller kapsla in information
    som på något sätt hör ihop.
    Grupperar data och metoder/funktioner
    Grupperar tillstånd och beteende...
*/

// Anonyma objekt...
// Så utnyttjar vi datatypen Object ifrån JavaScript...
// console.log(Object);

// const vehicle = new Object();
// console.log(vehicle);

// Lägga till egenskaper/variabler
// vehicle.id = 11;
// vehicle.manufacturer = 'Ford';
// console.log(vehicle);
// console.log(vehicle.manufacturer);

// const bike = new Object();
// bike.id = 25;
// bike.make = 'Monark';
// console.log(bike);

// const vehicle = {
//   id: 1,
//   manufacturer: 'Ford',
//   model: 'MACH-E',
// };

// console.log(vehicle);

// Utöka befintligt objekt med nya egenskaper...
// vehicle.modelYear = 2022;

// console.log(vehicle);

// vehicle.color = 'Black';
// vehicle.doors = 5;
// vehicle.regNo = 'ABC123';
// vehicle.engine = {
//   type: 'Hybrid',
//   HP: '500hk',
// };

// console.log(vehicle);
// console.log(vehicle.engine);
// console.log(vehicle.engine.type);

// Ta bort egenskaper
// delete vehicle.color;
// console.log('Number of doors:', vehicle.doors);

// console.log('Number of doors again:', vehicle['doors']);

// vehicle.model = 'Mustang';
// console.log('Updated vehicle:', vehicle);

// vehicle['regNo'] = 'BBB222';
// console.log('Updatede vehicle by using keys', vehicle);

// let firstName = 'Michael';
// console.log('FirstName', firstName);

// let anotherFirstName = 'Olle';
// console.log('FirstName', anotherFirstName);
// anotherFirstName = 'Eva';
// console.log('FirstName', anotherFirstName);

// firstName = anotherFirstName;
// console.log(firstName);

const vehicle1 = {
  id: 1,
  manufacturer: 'Volvo',
  model: 'V60',
};

console.log(vehicle1);

let vehicle2 = vehicle1;
console.log(vehicle2);

vehicle2.manufacturer = 'Ford';
vehicle2.id = 25;

console.log('Bil1', vehicle1);
console.log('Bil2', vehicle2);

let vehicle3 = {
  id: 3,
  manufacturer: 'Kia',
  model: 'EV6',
};

console.log('Bil3', vehicle3);
