// Nivel: 3
// Ejercicio 12: Contar vocales en un string
function contarVocales(texto: string): number {
    const vocales = 'aeiouAEIOU';
    let contador = 0;
    for (let letra of texto) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    return contador;
}

console.log(contarVocales('Hola mundo')); // 4

// Explicación:
// Quise ver cómo recorrer un string y contar las letras que son vocales.
