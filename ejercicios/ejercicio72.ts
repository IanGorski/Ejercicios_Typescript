// Ejercicio 72 - Nivel: 9
// Consigna: Implementar promiseAllEstricto(promesas) que preserve tipos de una tupla de Promises
// como lo hace Promise.all, demostrando el uso de variadic tuple types.

type Awaited_<T> = T extends Promise<infer U> ? Awaited_<U> : T; // anidado (por si Promesa de Promesa)

export async function promiseAllEstricto<T extends readonly unknown[]>(
    valores: [...T]
): Promise<{ [K in keyof T]: Awaited_<T[K]> }> {
    return Promise.all(valores) as any;
}

const resultado72 = promiseAllEstricto([
    Promise.resolve(1),
    Promise.resolve('hola'),
    99
] as const);

resultado72.then(r => {
    const n: number = r[0];
    const s: string = r[1];
    const fijo: 99 = r[2];
    console.log(n, s, fijo);
});

// Explicación:
// Uso un genérico T que es una tupla (readonly unknown[]). Mapeo cada índice para obtener su tipo resuelto (Awaited_).
// Eso permite inferir correctamente cada posición sin perder literalidad (por el as const en el uso).
