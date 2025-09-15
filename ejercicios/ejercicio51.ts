// Ejercicio 51 - Nivel: 6
// Consigna: Implementar una función identidad<T>(valor: T): T que simplemente devuelva lo que recibe.

function identidad<T>(valor: T): T {
    return valor;
}

const idNumero = identidad(123);
const idTexto = identidad("hola");
const idObjeto = identidad({ a: 1, b: "x" });
console.log(idNumero, idTexto, idObjeto);

// Explicación:
// Definí un genérico <T>. T representa el tipo del parámetro y del retorno.
// TypeScript infiere T según lo que le paso (number, string, objeto). Esto me ayuda a no duplicar funciones.
