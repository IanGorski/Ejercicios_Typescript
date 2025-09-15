// Ejercicio 56 - Nivel: 7
// Consigna: Combinar dos tipos con una intersección: crear merge<T, U>(a: T, b: U): T & U.

function merge<T, U>(a: T, b: U): T & U {
    return { ...a, ...b } as T & U;
}

const combinado = merge({ nombre: 'Ana' }, { edad: 30, activo: true });
console.log(combinado.nombre, combinado.edad, combinado.activo);

// Explicación:
// Uso spread para unir propiedades. El tipo de retorno es la intersección T & U, que contiene todas las claves.
// Esto me ayuda a modelar objetos que nacen de la combinación de otros.
