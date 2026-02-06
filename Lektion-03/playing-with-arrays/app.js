/*********************************************/
// Array en grundläggande datatyp
// i JavaScript (reference type)
// En sekventiell lagring av information
// Kan vi lagra vad som helst tillsammans i
// en lista(array)
/*********************************************/

// 1.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);

// 2.
// const numbers2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
// console.log(numbers2);

// 3. Skapa en tom array...
// const numbers3 = [];
// console.log(numbers3);

// Grundläggande egenskaper för arrayer...
// const length = numbers.length;
// console.log(length);

// Arbeta med arrayer...
// Plocka ett element ur en array...
// console.log(numbers[0]);
// console.log(numbers[2]);
// console.log(numbers[5]);

// Plocka det sista elementet ur en array...
// Det gamla sättet
// console.log(numbers[numbers.length - 1]);
// Det nya sättet...
// console.log(numbers.at(-1));
// console.log(numbers.at(-2));

// Lägga till element i en array...
// push()...
// numbers.push(10);
// console.log(numbers);

// The old way😁
// numbers[numbers.length] = 11;
// console.log(numbers);

// Kan lagra vad som helst hur som helst
const mixedList = [1, true, 'michael', { name: 'nisse' }];
console.log(mixedList);

const stringList = ['Volvo', 'Fiat', 'Kia'];
console.log(stringList);
stringList.push('Mercedes');
console.log(stringList);

// Lagra objekt i våra arrayer...
const vehicles = [
  {
    manufacturer: 'Volvo',
    model: 'XC60',
  },
  {
    manufacturer: 'BMW',
    model: 'iX3',
  },
  {
    manufacturer: 'Kia',
    model: 'EV6',
  },
  {
    manufacturer: 'Ford',
    model: 'MACH-E',
  },
];

console.log(vehicles);

vehicles.push({
  manufacturer: 'Volvo',
  model: 'V40',
});

console.log(vehicles);

/* Manipulera arrayer */
// unshift...
const newVehicle = {
  manufacturer: 'Mercedes',
  model: 'S500',
};

vehicles.unshift(newVehicle);
console.log(vehicles);

/* Plocka ut element/objekt ur en array... */
// Plocka ut det sista objektet/elementet...
// pop()...
/* const pickedLastVehicle = vehicles.pop();
console.log('Hämtat fordon', pickedLastVehicle);
console.log(vehicles); */

// Plocka ut första objektet/elementet...
// shift()...
/* const pickedFirstVehicle = vehicles.shift();
console.log('Hämtat första bilen', pickedFirstVehicle);
console.log(vehicles); */

// Ändra ordningen på en array
// reverse()...
console.log(vehicles.reverse());

// Sortera ordningen på en array...
// sort()...
const names = ['Zebra', 'Känguru', 'Lejon', 'Apa'];
console.log(names.sort());

// Kontrollera om ett element existerar i en lista...
// includes()...
const exists = names.includes('Lejon');
console.log(exists);

// Få tag i ett elements index(position)...
const index = names.indexOf('Känguru');
console.log(index);
console.log(names[index]);

// Skapa nya arrayer av befintliga arrayer...
// slice()...
const newAnimals = names.slice(1, 3);
console.log('newAnimals', newAnimals);
console.log('names', names);

// Ta bort ett element ur listan via en position...
const deletedAnimals = names.splice(1, 2);
console.log('deletedAnimals', deletedAnimals);
console.log('Animals', names);
