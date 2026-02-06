/*******************************************/
// Funktioner i JavaScript
/*******************************************/

/* 
    Funktioner/Metoder är ett sätt att gruppera logik/kod
    för att kunna återanvända...

    JavaScript har 3 olika sätt att skapa/deklarera funktioner på
    1.  Function Declarations
    2.  Function Expressions
    3.  Arrow Functions
*/

// Function Declarations...
// Skapar en namngiven funktion...
function writeToLog() {
  // Här hamnar logik...
  console.log('Detta är ett meddelande ifrån funktionen writeToLog');
}

function writeToLogWithArguments(message) {
  // Här hamnar logik...
  console.log(`Här kommer ett meddelande: ${message}`);
}

writeToLog();
/* writeToLog();
writeToLog(); */

writeToLogWithArguments('Nu är det lunch...');
/* writeToLogWithArguments('Nu är det lunch...');
writeToLogWithArguments('Nu är det lunch...');
writeToLogWithArguments('Nu är det lunch...'); */

// Funktion som gör något och returnerar ett resultat...

// Detta fungerar tack vara hoisting i JavaScript...
const result = sum(25, 6);
console.log(result);

function sum(a, b) {
  return a + b;
}

// const result = sum(5, 6);
// console.log(result);

/********************************************/
// Function expressions...(anonyma funktioner)
/********************************************/
// Detta fungerar icke!!!
// const addedVehicle = addVehicle('Fiat');
// console.log(addedVehicle);

const addVehicle = function (manufacturer) {
  return 'Sparar den nya bilen... ' + manufacturer;
};

const addedVehicle = addVehicle('Fiat');
console.log(addedVehicle);

/*********************************************/
//  3. Arrow functions (ES6)
/*********************************************/
const movies = ['Avatar', 'Batman', 'The bucket list'];

const listMovies = () => {
  return movies;
};

console.log(listMovies());

const getMovie = (index) => movies[index];

// const getMovie = (index) => {
//   return movies[index];
// };

console.log(getMovie(1));
