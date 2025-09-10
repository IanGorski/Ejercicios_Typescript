// Nivel: 5
// Ejercicio 39: Reemplazar todas las apariciones de una palabra en un texto
function reemplazarPalabra(texto: string, buscar: string, reemplazo: string): string {
    return texto.replaceAll(buscar, reemplazo);
}

console.log(reemplazarPalabra('hola mundo, hola!', 'hola', 'chau'));

// Explicación:
// Usé replaceAll para cambiar todas las palabras que busco por la nueva.
