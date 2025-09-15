// Ejercicio 65 - Nivel: 8
// Consigna: Crear un tipo DeepPartial<T> que vuelva opcionales todas las propiedades (y anidadas) de un objeto o array.

type DeepPartial<T> = T extends (...args: any[]) => any
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

interface ConfigDP {
    ui: { tema: string; fuente: { nombre: string; tam: number } };
    cache: { activo: boolean; ttl: number };
}

const parcial: DeepPartial<ConfigDP> = { ui: { fuente: { tam: 16 } } };
console.log(parcial);

// Explicación:
// Igual idea que DeepReadonly pero haciendo todas las propiedades opcionales usando '?'.
// Recursivamente permite construir configuraciones parciales.
