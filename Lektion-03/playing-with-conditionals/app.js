/******************************************************/
// Villkorshantering
/******************************************************/

// Truthy respektive Falsy...
/* 
    Truthy(sanna uttryck)
    skiljt ifrån 0
    'Michael'
    {}

    Falsy(ej sant)
    0
    ''
    undefined
    null
    NaN
*/

// console.log(Boolean(0));
// console.log(Boolean(-1));
// console.log(Boolean(1));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(''));
// console.log(Boolean('Michael'));
// console.log(Boolean({}));

/* if och else */
// if(){}else{}

// Setup variables and object...
const maxCarAge = 5;
const maxMileage = 10000;

const car = {
  manufacturer: 'Fiat',
  model: 'Uno',
  mileage: 11000,
  modelYear: 2022,
};

const currentYear = new Date().getFullYear();
const carAge = currentYear - car.modelYear;

// if(villkor){kodblock} else {kodblock}
if (carAge < maxCarAge) {
  console.log('Bilen är intressant för oss...');
  console.log('Andra kodraden');
} else {
  console.log('Bilen är för gammal för oss...');
}

// if (carAge < maxCarAge) console.log('Bilen är intressant för oss...');
// else console.log('Bilen är för gammal för oss...');

// One-liners, var försiktiga...
if (carAge < maxCarAge) console.log('Bilen är intressant');

// En mer korrekt one-liner med else...
const result =
  carAge < maxCarAge ? 'Bilen är intressant' : 'Bilen är inte intressant';

console.log(result);

// if else if else...
const day = 'Måndag';

// if (day == 'Måndag') {
//   console.log('Veckans jobbigaste dag, hoppas den går fort');
// } else if (day == 'Tisdag') {
//   console.log('Fortfarande jobbigt');
// } else if (day == 'Onsdag') {
//   console.log('Lille lördag, det börjar arta sig!');
// } else if (day == 'Torsdag') {
//   console.log('Snart helg.');
// } else if (day == 'Fredag') {
//   console.log('Nu tar vi helg');
// } else {
//   console.log('Nu vet jag inte vilken dag det är, hjälp!!!');
// }

// switch case...
// switch (day) {
//   case 'Måndag':
//     console.log('Veckans jobbigaste dag, hoppas den går fort');
//     break;
//   case 'Tisdag':
//     console.log('Fortfarande jobbigt');
//     break;
//   case 'Onsdag':
//     console.log('Lille lördag, det börjar arta sig!');
//     break;
//   case 'Torsdag':
//     console.log('Snart helg.');
//     break;
//   case 'Fredag':
//     console.log('Nu tar vi helg');
//     break;
//   case 'Lördag':
//     console.log('Nu är det lördag');
//     break;
//   default:
//     console.log('Nu vet jag inte vilken dag det är, hjälp!!!');
// }

// logiska operatorer || eller && och

// om carage är mindre än maxCarAge ELLER antal körda mil är lägre än
// maxmil som vi är intresserade
if (car.mileage <= maxMileage || carAge <= maxCarAge) {
  console.log('ELLER villkor: Bilen är intressant');
}

if (car.mileage < maxMileage && carAge < maxCarAge) {
  console.log('OCH villkor: Bilen är intressant');
}

console.log('*****************************');

const number = '10';
console.log(number);

// loose comparison...
if (number == 10) {
  console.log('Number är lika med ', number);
}

// strict comparison!!!!!
if (number === 10) {
  console.log('Number är lika med ', number);
} else {
  console.log('Number är inte lika med ', number);
}
