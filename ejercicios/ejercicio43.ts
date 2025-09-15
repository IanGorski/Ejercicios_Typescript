// Ejercicio 43 - Nivel: 5
// Consigna: Escribir una función eliminarDuplicados<T>(items: T[]) que devuelva un nuevo array sin elementos repetidos.

function eliminarDuplicados<T>(items: T[]): T[] {
    return Array.from(new Set(items));
}

console.log(eliminarDuplicados([1, 1, 2, 3, 3, 4, 5]));
console.log(eliminarDuplicados(['a', 'b', 'a', 'c']));

// Explicación:
// Uso Set porque automáticamente descarta duplicados. Luego convierto el Set nuevamente a array.
// Esto refuerza cómo reutilizar estructuras nativas con genéricos.
