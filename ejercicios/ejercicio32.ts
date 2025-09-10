// Nivel: 4
// Ejercicio 32: Array de números
function sumaArray(numeros: number[]): number {
    return numeros.reduce((acc, val) => acc + val, 0);
}

console.log(sumaArray([1, 2, 3, 4])); // 10

// Explicación:
// Estoy practicando cómo sumar todos los números de un array. Usé reduce porque vi que sirve para acumular valores.
// Probé la función con algunos números y lo mostré en la consola para ver si se suma correctamente.
