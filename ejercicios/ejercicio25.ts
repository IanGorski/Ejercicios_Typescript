// Nivel: 4
// Ejercicio 25: Obtener el promedio de un array de números
function promedio(arr: number[]): number {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}

console.log(promedio([4, 8, 6, 2])); // 5

// Explicación:
// Sumo todos los números y los divido por la cantidad para sacar el promedio.
