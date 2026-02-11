/***************************************************/
// Array.map()
/***************************************************/

/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

const result = numbers.map((number) => number * 2);
console.log(result);
*/
console.log(vehicles);

const result = vehicles.map((vehicle) => {
  return {
    regNo: vehicle.registrationNumber,
    company: vehicle.manufacturer,
    vehicleName: `${vehicle.manufacturer} ${vehicle.model}`,
  };
});

console.log(result);
