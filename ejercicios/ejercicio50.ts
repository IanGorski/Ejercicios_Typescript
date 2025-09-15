// Ejercicio 50 - Nivel: 5
// Consigna: Crear una función ejecutarSeguro<T>(fn: () => T) que retorne { ok: true, valor: T } o { ok: false, error: any }.

function ejecutarSeguro<T>(fn: () => T): { ok: true; valor: T } | { ok: false; error: any } {
    try {
        return { ok: true, valor: fn() };
    } catch (error) {
        return { ok: false, error };
    }
}

const resultadoExito = ejecutarSeguro(() => 42);
const resultadoError = ejecutarSeguro(() => { throw new Error('Fallo'); });
console.log(resultadoExito, resultadoError);

// Explicación:
// Uso un genérico para el valor retornado. Si la función lanza error lo capturo y devuelvo un objeto distinto.
// Así practico unions discriminadas (la propiedad ok diferencia los casos).
