// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Concat()...
/* 
const arr1 = ['a', 'b', 'c', 'd'];
console.log(arr1);
const arr2 = arr1.concat(numbers);
console.log(arr2);
 */
// Join()...

/* const strings = numbers.join(' ');
console.log(strings);
 */

/* 
    Destructuring, ett sätt att plocka isär en array eller
    ett objekt för att endast plocka ut det som är nödvändigt
*/
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Före E6...
// const a = numbers[0];
// const b = numbers[2];
// const c = numbers[3];
// console.log(a, b, c);

// Med E6...
const [bengt, y, z, a] = numbers;
console.log(bengt, y, z, a);

let [first, last] = numbers;
console.log(first, last);

// Kasta om ordningen...
[first, last] = [last, first];
console.log(first, last);

// Nästlade arrayer
const nestedArray = [6, 7, [1, 2]];
console.log(nestedArray);

// Plocka ut vad jag vill i en nästlade array.
// GLÖM INTE att sätta komma för det vi inte är intresserade av...
const [, x, [, b]] = nestedArray;
console.log(x, b);

const [k = 1, l = 2, v = 10] = [, 4, 25];
console.log(k, l, v);

/****************************************************/
// Destructoring på objekt...
/****************************************************/
const car = {
  id: 1,
  registrationNo: 'ABC123',
  make: 'Chevrolet',
  model: 'Corvette',
  modelYear: '2015',
  imageName: 'car1',
  mileage: 25000,
  description: 'Pellentesque habitant morbi tristique senectus et',
};

// Bara plocka registrationNumber,make,model...
// const { registrationNo, make, model } = car;
// console.log(registrationNo, make, model);

const {
  registrationNo: regNo,
  make: manufacturer,
  model,
  imageName: imageUrl,
} = car;
console.log(regNo, manufacturer, model, imageUrl);

/****************************************************/
// Spread operatorn...
/****************************************************/

let spreadArray = [5, 6, 7, 8, 9];
console.log(spreadArray);

const badWay = [
  1,
  2,
  3,
  4,
  spreadArray[0],
  spreadArray[1],
  spreadArray[2],
  spreadArray[3],
  spreadArray[4],
];
console.log(badWay);

// The good and best way...
const goodWay = [1, 2, 3, 4, ...spreadArray];
console.log(goodWay);

// Skapa en kopia av en annan array...
const copyOfArray = [...spreadArray];
console.log(copyOfArray);

// Skapa en kopia av ett objekt...
const copyOfCar = { ...car };
console.log(copyOfCar);
