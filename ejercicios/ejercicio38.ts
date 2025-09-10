// Nivel: 5
// Ejercicio 38: Verificar si todos los números de un array son positivos
function todosPositivos(arr: number[]): boolean {
    return arr.every(n => n > 0);
}

console.log(todosPositivos([1, 2, 3, 4])); // true
console.log(todosPositivos([1, -2, 3])); // false

// Explicación:
// Aprendí a usar every para chequear si todos cumplen una condición.
