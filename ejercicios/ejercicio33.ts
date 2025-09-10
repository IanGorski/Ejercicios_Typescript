// Nivel: 4
// Ejercicio 33: Parámetros REST
function maximo(...numeros: number[]): number {
    return Math.max(...numeros);
}

console.log(maximo(1, 5, 3, 9, 2)); // 9

// Explicación:
// Estoy aprendiendo que con ...numeros puedo pasar muchos números a la vez a la función.
// Después uso Math.max para ver cuál es el más grande de todos los que puse.
