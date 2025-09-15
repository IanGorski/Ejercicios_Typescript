// Ejercicio 78 - Nivel: 10
// Consigna: Implementar memoizeAsync(fn, ttlMs) que cachee resultados por argumentos (JSON.stringify)
// durante un tiempo (ttl). Si expira se recalcula.

interface EntradaCache {
    expira: number;
    valor: any;
}

export function memoizeAsync<A extends any[], R>(fn: (...args: A) => Promise<R>, ttlMs: number) {
    const cache = new Map<string, EntradaCache>();
    return async (...args: A): Promise<R> => {
        const clave = JSON.stringify(args);
        const ahora = Date.now();
        const guardado = cache.get(clave);
        if (guardado && guardado.expira > ahora) {
            return guardado.valor;
        }
        const valor = await fn(...args);
        cache.set(clave, { valor, expira: ahora + ttlMs });
        return valor;
    };
}

let llamadas = 0;
async function lenta78(x: number) { llamadas++; return x * 2; }
const memo = memoizeAsync(lenta78, 500);
(async () => {
    console.log(await memo(2)); // calcula
    console.log(await memo(2)); // cache
    console.log('Llamadas reales:', llamadas); // debería ser 1 si dentro del ttl
})();

// Explicación:
// Uso un Map con clave serializada de los argumentos. Guardo expiración y valor. Si no expiró devuelvo cache.
// Evita recalcular operaciones costosas repetidas veces en un intervalo.
