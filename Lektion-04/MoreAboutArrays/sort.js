/***************************************************/
// Array.sort()
// Egen implementering av sorteringsalgoritm(comparer)
/***************************************************/

// En sorteringsalgoritm = funktion...
// Skriva en egen funktion som åsidosätter den inbyggda
// sorteringsfunktionen i sort() funktionen...

// En sorteringsfunktion tar ALLTID två argument, för att kunna
// jämföra dessa två argument med varandra och fatta ett beslut
// vad som är störst eller minst...

// function(a,b){}
// Om en funktions värde är mindre än 0 (value < 0)
// då ska a värdet hamna före b värdet...
//  Om en funktions värde är större än 0 (value > 0)
// då ska b värdet hamna för a värdet...

// Enkelt exempel...
const transactions = [3000, -250, 200, 400, -50, 2000, 1000];
console.log('Trx:', transactions);
console.log('Sorterad trx lista:', transactions.sort());

// Sortera i stigande ordning (ascending)...
/*
transactions.sort((x, y) => {
  if (x > y) return 1;
  if (x < y) return -1;
});
*/

transactions.sort((a, b) => a - b);

console.log(transactions);

// Sortera i fallande ordning (descending)...
/*
transactions.sort((x, y) => {
  if (x < y) return 1;
  if (x > y) return -1;
});
*/

transactions.sort((a, b) => b - a);
console.log(transactions);
