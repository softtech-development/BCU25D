/* Arbeta med numeriska värden i JavaScript */

// Egenskaper...
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// Testa om värdet är ett heltal...
// console.log(Number.isInteger(2.543786));
// console.log(Number.isInteger(2));

// Tolka/omvandla en sträng till numeriskt värde...
// let value = '2.56789';
// console.log('Värdet = ', value);
// console.log(Number.parseFloat(value));
// console.log(Number.parseInt(value));
// value = 'Kalle Anka';
// console.log(Number.parseFloat(value));

/* Hantera/styra antalet decimaler */
// const amount = '19.94561234';
// console.log(parseFloat(amount));
// console.log(parseFloat(amount).toFixed(2));
// console.log(parseFloat(amount).toFixed(4));
// console.log(parseFloat(amount).toFixed(1));

/* Omvandling till korrekt locale */
// const payment = 2500000.75;
// console.log(payment.toString());
// console.log(payment.toLocaleString());
// console.log(payment.toLocaleString('sv-SE'));
// console.log(payment.toLocaleString('en-US'));
// console.log(payment.toLocaleString('en-GB'));
// console.log(payment.toLocaleString('fr-FR'));

// JavaScripts hyfsat nya datatyp bigint....
// const veryBigNumber = 999999999999999999999999999999999999999999999n;

/* 
    Matematiska funktioner/metoder...
*/
const number = 1.5236897;
// Math...
console.log(Math.ceil(number));
console.log(Math.floor(number));
console.log(Math.round(number));

// Räkna ut antalet timmar och minuter baserat på en tidslängd t ex 79
const movieLength = 211;
const hours = Math.floor(movieLength / 60);
const minutes = movieLength % 60;
console.log(`Antal timmar: ${hours} tim och ${minutes} min`);

/* Generera slumptal... */
// Math.random();
let rnd = Math.random();
console.log('Random 1', rnd);

rnd = Math.random() * 5;
console.log('Random 2', rnd);

rnd = Math.floor(Math.random() * 5);
console.log('Random 3', rnd);

const min = Math.ceil(10000);
const max = Math.floor(200000);
console.log('Min:', min, 'Max:', max);

rnd = Math.floor(Math.random() * (max - min) + min);
console.log('Random 4', rnd);
