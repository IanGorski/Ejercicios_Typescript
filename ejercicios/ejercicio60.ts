// Ejercicio 60 - Nivel: 7
// Consigna: Implementar getPropSeguro<T, K extends keyof T>(obj: T, clave: K): [true, T[K]] | [false, undefined]
// Si la propiedad existe y no es undefined retorna [true, valor] de lo contrario [false, undefined].

function getPropSeguro<T, K extends keyof T>(obj: T, clave: K): [true, T[K]] | [false, undefined] {
    const valor = obj[clave];
    if (valor !== undefined) {
        return [true, valor];
    }
    return [false, undefined];
}

const usuarioGPS = { id: 1, nombre: 'Ana', edad: 0 };
console.log(getPropSeguro(usuarioGPS, 'nombre')); // [true, 'Ana']
console.log(getPropSeguro(usuarioGPS, 'edad'));   // [true, 0]

// Explicación:
// Devuelvo una tupla donde el primer elemento indica si hay valor definido.
// Así puedo hacer desestructuración y chequear el booleano antes de usar el valor.
