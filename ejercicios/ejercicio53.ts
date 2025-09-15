// Ejercicio 53 - Nivel: 6
// Consigna: Implementar extraerPropiedad<T, K extends keyof T>(obj: T, clave: K): T[K] que retorne el valor de la clave indicada.

function extraerPropiedad<T, K extends keyof T>(obj: T, clave: K): T[K] {
    return obj[clave];
}

const personaEP = { nombre: 'Ana', edad: 28 };
console.log(extraerPropiedad(personaEP, 'nombre'));
console.log(extraerPropiedad(personaEP, 'edad'));

// Explicación:
// K está restringido a las claves de T. T[K] representa el tipo del valor en esa clave.
// Así evito pedir claves que no existen y obtengo el tipo correcto como retorno.
