// Ejercicio 55 - Nivel: 6
// Consigna: Implementar esStringArray(valor: unknown): valor is string[] que determine si un valor es un array de strings.

function esStringArray(valor: unknown): valor is string[] {
    return Array.isArray(valor) && valor.every(v => typeof v === 'string');
}

const prueba1: unknown = ['a', 'b', 'c'];
if (esStringArray(prueba1)) {
    // Dentro de este bloque TypeScript sabe que prueba1 es string[]
    console.log(prueba1.map(s => s.toUpperCase()));
}

// Explicación:
// Declaro la función con un type predicate (valor is string[]). Eso informa al compilador que si retorna true,
// dentro del bloque el tipo queda refinado y puedo usar métodos de string.
