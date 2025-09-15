// Ejercicio 71 - Nivel: 9
// Consigna: Implementar wrapAsync(fn) que reciba una función async y retorne otra que al llamarse
// devuelva una Promesa con tupla [error, data]. Si la función original resuelve => [null, valor]; si lanza => [error, null].

export function wrapAsync<A extends any[], R>(fn: (...args: A) => Promise<R>) {
    return async (...args: A): Promise<[unknown, R | null]> => {
        try {
            const data = await fn(...args);
            return [null, data];
        } catch (e) {
            return [e, null];
        }
    };
}

async function puedeFallar(n: number): Promise<number> {
    if (n % 2 === 1) throw new Error('Número impar no permitido');
    return n * 2;
}

const seguro = wrapAsync(puedeFallar);
(async () => {
    console.log(await seguro(2)); // [null, 4]
    console.log(await seguro(3)); // [Error, null]
})();

// Explicación:
// En vez de usar try/catch cada vez que llamo a la función, wrapAsync centraliza el manejo.
// La tupla posiciona el error primero (o null) y luego el dato (o null) para un patrón consistente.
