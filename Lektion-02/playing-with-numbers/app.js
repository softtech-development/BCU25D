/* Arbeta med numeriska värden i JavaScript */

// Egenskaper...
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// Testa om värdet är ett heltal...
console.log(Number.isInteger(2.543786));
console.log(Number.isInteger(2));

// Tolka/omvandla en sträng till numeriskt värde...
const value = '2.56789';
console.log('Värdet = ', value);
console.log(Number.parseFloat(value));
