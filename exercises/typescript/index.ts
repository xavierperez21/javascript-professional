// Interfaces: Define the exact properties that an object must have, we cannot add more or less properties
// We can add optional properties using the  '?' operator (like we did in the arguments of a function)
interface Rectangulo {
    ancho: number,
    alto: number
    color?: Color   // Optional property
}

enum Color {
    Rojo = 'Rojo',
    Azul = 'Azul',
    Verde = 'Verde'
}

let rectangulo: Rectangulo = {
    ancho: 4,
    alto: 6,
    // color: Color.Rojo
};

function area (r: Rectangulo): number {
    return r.alto * r.ancho;
}

const areaRect = area(rectangulo);
console.log(areaRect);

const otherRect = area({ ancho: 3, alto: 2, volumen:20 })

rectangulo.toString = function () {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
};

console.log(rectangulo.toString())