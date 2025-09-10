// Nivel: 4
// Ejercicio 29: Obtener el primer número impar de un array
function primerImpar(arr: number[]): number | undefined {
    return arr.find(n => n % 2 !== 0);
}

console.log(primerImpar([2, 4, 6, 7, 8])); // 7

// Explicación:
// Probé find para encontrar el primer número que no es par.
