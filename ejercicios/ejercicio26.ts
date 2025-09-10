// Nivel: 4
// Ejercicio 26: Obtener los números mayores a un valor dado
function mayoresA(arr: number[], valor: number): number[] {
    return arr.filter(n => n > valor);
}

console.log(mayoresA([1, 5, 8, 3, 10], 5)); // [8,10]

// Explicación:
// Usé filter para quedarme solo con los que son más grandes que el valor que le paso.
