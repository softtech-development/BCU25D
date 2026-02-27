// Funktioner i TypeScript...
function sayHello(name: string): number {
    console.log("hej", name)
    return 10;
}

const sayGoodBye = (name: string): number => {
    console.log("Hej då", name)
    return 20;
}

const checkModelYear = (modelYear: number): boolean | string => {
    if (modelYear < 2019) {
        return "För gammal går ej att sälja!"
    }
    return true;
}

const result = sayHello("Michael");
console.log(result)