// Två nya data strukturer vi ska kika på
// 1. Sets, eliminera dubbletter av data
// 2. Maps, liknar dictionaries i andra språk
//          kombination av nyckel och värde...

// Sets...
const manufacturers = [
  'Volvo',
  'Fiat',
  'Renault',
  'Volvo',
  'Fiat',
  'Mercedes',
  'BMW',
];

console.log(manufacturers);

// Ta bort dubbletter...
const makeSet = new Set(manufacturers);
console.log(makeSet);

// Ta reda på storleken på ett sets...
console.log(makeSet.size);
// Kontrollera om ett element finns i listan(set)
console.log(makeSet.has('Mercedes'));
console.log(makeSet.has('Ferrari'));

// Lägg till i vårt set
makeSet.add('Ferrari');
console.log(makeSet.has('Ferrari'));

// Ta bort ifrån vårt set
makeSet.delete('Fiat');
console.log(makeSet);

// Ta bort vår set
makeSet.clear();
console.log(makeSet);

// Maps, dictionaries nyckel(key) => värde(value)
const vehicleUsage = new Map();
vehicleUsage.set('N', 'Normal Use');
vehicleUsage.set('RC', 'Rental Car');
vehicleUsage.set('T', 'Taxi');

console.log(vehicleUsage);

console.log(vehicleUsage.get('T'));
console.log([...vehicleUsage]);
console.log(vehicleUsage.entries());
console.log(vehicleUsage.keys());
console.log(vehicleUsage.values());
console.log([...vehicleUsage.keys()]);
console.log([...vehicleUsage.values()]);

for (let [key, value] of vehicleUsage) {
  console.log('Key:', key, 'Value:', value);
}
