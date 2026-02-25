function Vehicle(manufacturer, model) {
  this.manufacturer = manufacturer;
  this.model = model;
}

const vehicle = new Vehicle('Volvo', 'V60');
console.log(vehicle);

function Car(manufacturer, model) {
  // Anropa Vehicle för att skapa ett arv
  // Car ska bli ett barn till Vehicle
  Vehicle.call(this, manufacturer, model);
  this.mileage;
  this.modelYear;
  this.doors;
}

const fiat = new Car('Fiat', 'Uno');
fiat.mileage = 110000;
fiat.modelYear = 2016;
console.log(fiat);

function Truck(manufacturer, model) {
  Car.call(this, manufacturer, model);
  this.tara = 50000;
}

const mack = new Truck('Mack', 'X41');
mack.modelYear = 2023;
console.log(mack);

/* Lite snyggare lite bättre... 😁 */
// Car.prototype = Object.create(Vehicle.prototype);
// Truck.prototype = Object.create(Car.prototype);

Car.prototype.constructor = Vehicle;
Truck.prototype.constructor = Car;

console.log(fiat);
console.log(mack);

// Kontrollera om en instans är av en viss klass(funktion)
console.log(fiat instanceof Car);

// Kontrollera om en instans har en egenskapen som är dess egen...
console.log(fiat.hasOwnProperty('model'));
console.log(fiat.hasOwnProperty('manufacturer'));
console.log(fiat.hasOwnProperty('mileage'));
console.log(fiat.hasOwnProperty('model'), fiat.hasOwnProperty('mileage'));

fiat.wheels = 4;
// Hämta alla egenskaper(key)
console.log(Object.keys(fiat));
console.log(Object.keys(vehicle));

// Hämta värdena(values) för alla nycklar
console.log(Object.values(fiat));
console.log(Object.values(vehicle));

// Loopa igenom alla nycklar och plocka ut
// nyckeln och dess värde
console.log(Object.entries(fiat));
for (let [key, values] of Object.entries(fiat)) {
  if (typeof values !== 'function') {
    console.log(`Egenskapen ${key} har värdet ${values}`);
  }
}
