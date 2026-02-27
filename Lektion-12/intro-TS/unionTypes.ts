// Union Type?
// Deklarera en variabel som kan vara av två olika datatyper🤯.
let modelYear: number | string = "2017m"

// Funkar även på komplexa typer...
// Som t ex type...
type Point = {
    x: number;
    y: number;
}

type Loc = {
    lat: number;
    long: number;
}

let coordinates: Point | Loc = { x: 10, y: 20 }
coordinates = { lat: 43.67, long: 77.65 }

// Union typer med arrayer...
const coords: (Point | Loc)[] = [];
coords.push({ x: 30, y: -10 })
coords.push({ lat: 100.4, long: 40.9 })

console.log(coords);

let vehicleType: 'Sedan' | 'Station Wagon' | 'Cab' | 'Sportscar';

const car = {
    carType: vehicleType = "Sportscar"
}

console.log(car)