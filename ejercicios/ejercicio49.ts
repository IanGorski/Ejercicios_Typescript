// Ejercicio 49 - Nivel: 5
// Consigna: Implementar crearSlug(texto: string) que convierta una cadena a un slug URL-friendly:
// - Minúsculas, sin acentos, espacios y símbolos reemplazados por '-'
// - Quitar guiones repetidos y guiones al inicio/fin.

function crearSlug(texto: string): string {
    return texto
        .normalize('NFD') // separa acentos
        .replace(/\p{Diacritic}/gu, '') // elimina marcas
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-') // reemplaza grupos no permitidos
        .replace(/^-+|-+$/g, '') // quita guiones extremos
        .replace(/-{2,}/g, '-'); // colapsa múltiples
}

console.log(crearSlug('Hola Mundo!!! Qué tal?'));

// Explicación:
// Normalizo para remover acentos. Uso regex para limpiar lo que no sea alfanumérico.
// Finalmente aseguro que no hayan guiones de más.
