// Ejercicio 64 - Nivel: 8
// Consigna: Crear un tipo DeepReadonly<T> que marque todas las propiedades (y anidadas) como readonly (versión simple: objetos y arrays).

type DeepReadonly<T> = T extends (...args: any[]) => any
    ? T
    : T extends Array<infer U>
    ? ReadonlyArray<DeepReadonly<U>>
    : T extends object
    ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
    : T;

interface PerfilDR {
    nombre: string;
    direccion: { ciudad: string; pais: string };
    tags: string[];
}

const perfilRO: DeepReadonly<PerfilDR> = {
    nombre: 'Ana',
    direccion: { ciudad: 'Buenos Aires', pais: 'Argentina' },
    tags: ['dev', 'ts']
};
// perfilRO.nombre = 'Otro'; // Error

// Explicación:
// Uso condicionales: si es función la dejo igual; si es array aplico recursivamente; si es objeto mapeo sus claves y hago DeepReadonly a cada valor.
