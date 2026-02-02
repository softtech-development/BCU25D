// Använda oss av console objektet för att skicka
// ut meddelanden till webbläsarens konsolfönster...
/* 
console.log('Hej på dig!', 'Michael');
console.warn('Detta är en varning!!!');
console.error('Detta är ett fel!');
console.log(350);
console.log('350');
console.log(false);
console.log({ make: 'Volvo', model: 'V60' });
console.table({ make: 'Volvo', model: 'V60' });
console.dir({ make: 'Volvo', model: 'V60' }); 
*/
/* 
// Hantera variabler och värden...
// Deklarera en variabel och sätt ett värde direkt...
var firstName = 'Michael';
// Deklarera en variabel utan värde...
var email;
email = null;

console.log('FirstName:', firstName);
console.log('firstName is:', typeof firstName);
console.log('Email:', email);
console.log('email is:', typeof email);

firstName = 150;
console.log('FirstName:', firstName);
console.log('firstName is now:', typeof firstName);

firstName = true;
console.log('FirstName:', firstName);
console.log('firstName is now:', typeof firstName);

firstName = undefined;
console.log('FirstName:', firstName);
console.log('firstName is now:', typeof firstName);
 */

// var a = 'Nisse';
// console.log(window);

// var a = 250;

// Vi har 3 olika sätt att deklarera variabler på i JavaScript...
// 1.   var = variabeln och dess värde att hamna i window objektet
// Det globala namnutrymmet...
// ANVÄNDA ALDRIG!!!

// 2.  let = deklarerar en variabel i ett block scoped område(mutable)
//      mutable = går att ändra...

// 3.   const = deklarerar en variabel i ett block scoped område(immutable)
//      immutable = går inte att ändra...

// 2. let
let firstName = 'Michael';
console.log('firstName', firstName);
firstName = 'Olle';
console.log('firstName', firstName);

// 3. const
const make = 'Volvo';
console.log('make', make);

// Går ej!!!
// make = 'Fiat';
// console.log('make', make);

// const lastName = 'Olsson';
// console.log('lastName', lastName);

function test1() {
  let lastName = 'Gustavsson';
  console.log('lastName', lastName);
}

function test2() {
  let lastName = 'Arvidsson';
  console.log('lastName', lastName);
}

test1();
test2();
lastName = 'Ivarsson';
console.log('lastName', lastName);

console.log(window);

// let lastName = 'Olsson';
// console.log('lastName', lastName);
