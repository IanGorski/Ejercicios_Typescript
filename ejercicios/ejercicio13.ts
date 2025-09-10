// Ejercicio 13: Invertir un string
// Nivel: 3
function invertirString(texto: string): string {
    return texto.split('').reverse().join('');
}

console.log(invertirString('typescript')); // tpircsepyt

// Explicación:
// Aprendí a separar el string en letras, darlo vuelta y volverlo a juntar.
