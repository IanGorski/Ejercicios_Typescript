// Ejercicio 52 - Nivel: 6
// Consigna: Crear obtenerPrimero<T>(items: T[]): T | undefined que devuelva el primer elemento o undefined si está vacío.

function obtenerPrimero<T>(items: T[]): T | undefined {
    return items.length > 0 ? items[0] : undefined;
}

console.log(obtenerPrimero([10, 20, 30]));
console.log(obtenerPrimero<string>([]));

// Explicación:
// Uso <T> para que la función funcione con cualquier tipo de array.
// El retorno puede ser T o undefined porque un array vacío no tiene primer elemento.
