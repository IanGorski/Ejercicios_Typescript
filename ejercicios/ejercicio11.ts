// Nivel: 3
// Ejercicio 11: Obtener el menor de un array de números
function menorNumero(arr: number[]): number {
    return Math.min(...arr);
}

console.log(menorNumero([5, 2, 8, 1, 4])); // 1

// Explicación:
// Estoy practicando cómo encontrar el número más chico en un array usando Math.min y el spread operator.
