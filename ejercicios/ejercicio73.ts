// Ejercicio 73 - Nivel: 9
// Consigna: Implementar retryAsync(fn, intentos, delayMs) que reintente ejecutar una función async
// hasta que se resuelva o agote los intentos, esperando delay entre reintentos.

export async function retryAsync<R>(
    fn: () => Promise<R>,
    intentos: number,
    delayMs: number
): Promise<R> {
    let ultimoError: unknown;
    for (let i = 0; i < intentos; i++) {
        try {
            return await fn();
        } catch (e) {
            ultimoError = e;
            if (i < intentos - 1) {
                await new Promise(res => setTimeout(res, delayMs));
            }
        }
    }
    throw ultimoError;
}

let contador73 = 0;
async function fallaHasta3() {
    contador73++;
    if (contador73 < 3) throw new Error('Fallo temporal');
    return 'OK en intento ' + contador73;
}

retryAsync(fallaHasta3, 5, 200).then(console.log);

// Explicación:
// Intento ejecutar la función; si falla guardo el error y si aún hay intentos restantes espero con setTimeout envuelto en Promise.
// Si todos los intentos fallan, relanzo el último error.
