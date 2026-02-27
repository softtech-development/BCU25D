// Definiera en typ (type)...
// Type definition...
type Vehicle = {
  readonly id: number;
  manufacturer: string;
  model: string;
  modelYear: number;
  mileage: number;
  imageUrl: string;
  equipment?: string[]
}

type Color = {
  color: string;
}

// intersection, slår samman flera typer till en ny typ...
type CompleteVehicle = Vehicle & Color;

// intersection version 2, används väldigt sällan...
type SuperVehicle = Vehicle & Color & { reach: number }

const volvo: CompleteVehicle = {
  id: 1,
  color: "Black",
  manufacturer: "Volvo",
  model: "EX60",
  modelYear: 2026,
  mileage: 10,
  imageUrl: "https:/bla/bla.jpg"
}

const bmw: CompleteVehicle = {
  id: 2,
  color: "Mineralvit",
  manufacturer: "BMW",
  model: "I3",
  modelYear: 2025,
  mileage: 10000,
  imageUrl: "https:/bla/bla.jpg",
  equipment: ["navigator", "backseat heating", "glass roof"]
}


console.log(volvo)
console.log(bmw)

