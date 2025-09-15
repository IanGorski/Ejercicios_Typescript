// Ejercicio 42 - Nivel: 5
// Consigna: Crear una función frecuenciaPalabras(texto: string) que devuelva un objeto con la cantidad de apariciones de cada palabra.
// Debe ignorar mayúsculas/minúsculas y signos de puntuación básicos.
// Objetivo: Practicar manipulación de strings, regex simple y conteo en objetos.

function frecuenciaPalabras(texto: string): Record<string, number> {
    const limpio = texto
        .toLowerCase()
        .replace(/[.,;:¡!¿?()"']/g, ' ')
        .replace(/\s+/g, ' ') 
        .trim();
    if (!limpio) return {};
    return limpio.split(' ').reduce((acc, palabra) => {
        acc[palabra] = (acc[palabra] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);
}

console.log(frecuenciaPalabras('Hola hola, HOla mundo! mundo mundo.'));

// Explicación:
// Normalicé el texto a minúsculas, saqué signos y colapsé espacios. Luego conté cada palabra usando reduce.
// Esto me ayuda a practicar cómo limpiar texto y usar objetos como contadores.
