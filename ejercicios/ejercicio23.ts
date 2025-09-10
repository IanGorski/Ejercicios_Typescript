// Nivel: 4
// Ejercicio 23: Sumar solo los números positivos de un array
function sumarPositivos(arr: number[]): number {
    return arr.filter(n => n > 0).reduce((a, b) => a + b, 0);
}

console.log(sumarPositivos([-2, 3, 7, -1, 4])); // 14

// Explicación:
// Probé cómo filtrar los positivos y después sumarlos con reduce.
