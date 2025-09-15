// Ejercicio 75 - Nivel: 9
// Consigna: Implementar un tipo MiAwaited<T> que replique el comportamiento del Awaited nativo (simplificado).

export type MiAwaited<T> = T extends Promise<infer U> ? MiAwaited<U> : T;

type A1 = MiAwaited<Promise<number>>;       
type A2 = MiAwaited<Promise<Promise<string>>>;
type A3 = MiAwaited<string>;               

// Explicación:
// Uso recursividad en el conditional type: si es Promise extraigo el interior y vuelvo a aplicar.
// Si ya no es Promise termino la recursión devolviendo el tipo final.
