// Nivel: 5
// Ejercicio 40: Obtener la suma de los dígitos de un número
function sumaDigitos(num: number): number {
    return num.toString().split('').reduce((acc, d) => acc + Number(d), 0);
}

console.log(sumaDigitos(1234)); // 10

// Explicación:
// Convertí el número a string, separé los dígitos y los sumé.
