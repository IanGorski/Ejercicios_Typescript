// Nivel: 4
// Ejercicio 34: Tipado de función
let concatenar: (a: string, b: string) => string;
concatenar = function (a, b) {
    return a + b;
};

console.log(concatenar('Hola', ' Mundo')); // Hola Mundo

// Explicación:
// Estoy aprendiendo a ponerle tipo a las funciones. Acá hice una variable que solo acepta funciones que junten dos textos.
// Después le puse una función que concatena y probé si funciona con dos palabras.
