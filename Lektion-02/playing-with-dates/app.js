/* JavaScript Date... */
/* 
    Date i JavaScript representerar antalet millisekunder som har 
    passerat sedan startdatumet för JavaScript tidräknings(epoch)
    1970-01-01...
*/
// console.log(new Date());
// let birthDate = new Date('1990-12-15');
// console.log('Birthdate', birthDate);

// birthDate = new Date('1990-12-15 22:01:48');
// console.log('Birthdate', birthDate);

// birthDate = new Date('november 13 1990 22:02:15');
// console.log('Birthdate', birthDate);

// birthDate = new Date(1990, 0, 17);
// console.log('Birthdate', birthDate);

// birthDate = new Date(1990, 0, 17, 21, 35, 12, 0, 0);
// console.log('Birthdate', birthDate);

/* Arbeta med Date datatypen... */
let currentDate = new Date();
console.log('Aktuell datum och tid', currentDate);
console.log('Aktuell datum och tid', Date.now());
console.log('Aktuell datum och tid', Date.parse('2024-12-01'));

// Plocka ut de olika delarna ur datumet
// Året
console.log('År', currentDate.getFullYear());
// Månad
console.log('Månad', currentDate.getMonth() + 1);
// Dagen
console.log('Dag', currentDate.getDay());
// Dagens datum
console.log('Datumet för dagen', currentDate.getDate());
// Timme
console.log('Tim', currentDate.getHours());
// Minuter
console.log('Min', currentDate.getMinutes());
// Sekunder
console.log('Tim', currentDate.getSeconds());
// Millisekunder
console.log('Tim', currentDate.getMilliseconds());
// epoch time
console.log('Epoch', new Date(0));

// Timezone hantering...
console.log('Timezone offset', currentDate.getTimezoneOffset());

// Ett mer verkligt exempel...
// Skapa ett förfallodatum på en faktura
let invoiceDate = new Date('2026-02-04');
console.log('Invoice Date', invoiceDate);
let dueDate = new Date();
dueDate.setDate(invoiceDate.getDate() + 20);
console.log('Due date', dueDate);

/* 
    För att slippa krångel med JavaScripts inbyggda datumhantering
    använd moment.js...
*/
