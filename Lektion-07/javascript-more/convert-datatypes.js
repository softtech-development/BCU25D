/*
    Typ omvandling...
    1.  Conversion  = explicit(tvingande type omvandling)
    2.  Coersion    = implicit(automatisk typ omvandling)

    sträng => tal, tal => sträng
*/

// Type conversion(explicit)...
const birthYear = '1990';
console.log(birthYear);

// Detta funkar inte!!!
// console.log(birthYear + 10); // birthYear => + '10'

// Explicit(Conversion)...
console.log(Number(birthYear), birthYear);
console.log(Number(birthYear) + 10);
/* 
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);
 */
const regNumber = 2018;
// Implicit(Coersion) konvertering...
console.log(regNumber + 'XYZ');
// Explicit(Conversion) konvertering...
console.log(String(regNumber) + 'XYZ');

// Special knep för att omvandla en sträng till numeriskt...
const number = '10';
console.log(number);
console.log(+number);

console.log('Min hund är ' + 6 + ' år gammal');
// console.log('Min hund är ' + String(6) + ' år gammal');

let x = '1' + 1;
console.log('x = ', x);

// template strings

// x = '11'
x = x * 2; // '11' => 11 - 1
console.log('x = ', x);

x = x / 2;
console.log(x);

const y = '10' - '2' - 3 + '5';
// '10' -> 10 - '2' -> 2 (10-2) = 8 - 3 = 5 + '5' = 55
console.log('y = ', y);
/* 
const test = prompt('Ange ett värde');
console.log(test);
console.log(typeof test, test);
 */
