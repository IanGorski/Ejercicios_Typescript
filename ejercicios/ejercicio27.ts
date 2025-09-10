// Nivel: 4
// Ejercicio 27: Contar palabras en una frase
function contarPalabras(frase: string): number {
    return frase.trim().split(/\s+/).length;
}

console.log(contarPalabras('Hola mundo TypeScript')); // 3

// Explicación:
// Separé el string por espacios y conté cuántos elementos hay.
