// const volvo = {
//   manufacturer: 'Volvo',
// };

// const ford = {
//   manufacturer: 'ford',
// };

// console.log(volvo);
// console.log(ford);

/*
// Constructor function
function Vehicle(vehicleName = 'Missing') {
  console.log(vehicleName);
}

// Vehicle();

// console.log(typeof Vehicle);

const volvo = new Vehicle('Volvo');
const ford = new Vehicle('Ford');

console.log(volvo);
console.log(typeof volvo);

console.log(ford);
console.log(typeof ford);
*/

// Skapa en konstruktor funktion (Klass)
function Vehicle(vehicleName = 'Missing') {
  // Properties
  /* 
    Tillstånd
  */
  this.vehicleName = vehicleName;
  this.model = '';
  this.modelYear;
  this.mileage;

  // Beteende = funktioner/metoder
  this.vehicleInfo = function () {
    return `${this.vehicleName} ${this.model} ${this.modelYear}`;
  };

  this.ignite = () => {
    console.log('Startar', this.vehicleName);
  };
}

// Skapa en instans av funktionen Vehicle, volvo
const volvo = new Vehicle('Volvo');
// Sätt värden på egenskaperna(addera tillstånd)
volvo.model = 'V60';
volvo.modelYear = 2020;
volvo.mileage = 98500;
console.log('VEHICLE INFO:', volvo.vehicleInfo());
volvo.ignite();

// Skapa ytterligare en instans av funktionen Vehicle, ford
const ford = new Vehicle('Ford');
// Sätt värden på egenskaperna...
ford.model = 'Fusion';
ford.modelYear = 2013;
ford.mileage = 259000;
console.log('VEHICLE INFO:', ford.vehicleInfo());
ford.ignite();

console.log(volvo);
console.log(volvo.vehicleName);
console.log(ford);
console.log(ford.vehicleName);

/* Dynamiskt lägga till egenskaper och metoder på ett objekt */
volvo.manufacturer = 'Volvo';
console.log('Dynamisk egenskap', volvo);
console.log(ford);

ford.break = function () {
  console.log('Forden bromsar');
  console.log(this.model, 'bromsar');
};

console.log('FORD', ford);
console.log('VOLVO', volvo);

ford.accelerate = () => {
  console.log('FORD Gasar');
  console.log(this.model, 'gasar');
};

console.log('FORD', ford);

// Testa bromsarna
ford.break();

// Testa gaspedalen
ford.accelerate();

/* Ta bort egenskaper metoder dynamiskt */
delete ford.accelerate;
console.log(ford);

delete volvo.break;
console.log(volvo);

delete volvo.manufacturer;
console.log(volvo);

const fiat = volvo;
// const bmw = new volvo();

console.log('FIAT', fiat);
console.log('VOLVO', volvo);

fiat.vehicleName = 'Fiat';

console.log('FIAT', fiat);
console.log('VOLVO', volvo);

// bmw.vehicleName = 'BMW';
// console.log('BMW', bmw);
// console.log('VOLVO', volvo);
