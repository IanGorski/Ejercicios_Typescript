// Nivel: 4
// Ejercicio 30: Multiplicar todos los elementos de un array por un número
function multiplicarArray(arr: number[], num: number): number[] {
    return arr.map(n => n * num);
}

console.log(multiplicarArray([1, 2, 3], 3)); // [3,6,9]

// Explicación:
// Usé map para multiplicar cada elemento por el número que le paso.
