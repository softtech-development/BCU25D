function Vehicle(vehicleName = 'Missing') {
  // Properties
  /* 
    Tillstånd
  */
  this.vehicleName = vehicleName;
  this.model = '';
  this.modelYear;
  this.mileage;
}

const volvo = new Vehicle('Volvo');
console.log(volvo);

// Prototyping för att bygga ut funktionen...
Vehicle.prototype.break = function () {
  return `${this.vehicleName} Bromsar för glatta livet!`;
};

Vehicle.prototype.ignite = function () {
  return `${this.vehicleName} startar`;
};

const bmw = new Vehicle('BMW');
console.log('BMW', bmw);

console.log(bmw.break());
console.log(bmw.ignite());

console.log(volvo.break());
console.log(volvo.ignite());

console.log(Object.getPrototypeOf(volvo));
console.log(Object.getPrototypeOf(bmw));
