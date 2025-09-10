// Ejercicio 24: Verificar si un string es palíndromo
// Nivel: 4
function esPalindromo(texto: string): boolean {
    const limpio = texto.replace(/\s/g, '').toLowerCase();
    return limpio === limpio.split('').reverse().join('');
}

console.log(esPalindromo('Anita lava la tina')); // true

// Explicación:
// Comparé el string original con el invertido para ver si son iguales.
