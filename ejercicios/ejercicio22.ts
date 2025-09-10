// Nivel: 4
// Ejercicio 22: Filtrar números pares de un array
function filtrarPares(arr: number[]): number[] {
    return arr.filter(num => num % 2 === 0);
}

console.log(filtrarPares([1, 2, 3, 4, 5, 6])); // [2,4,6]

// Explicación:
// Usé filter para quedarme solo con los números que son pares.
