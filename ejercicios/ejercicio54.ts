// Ejercicio 54 - Nivel: 6
// Consigna: Crear una función describir(valor: string | number | boolean) que retorne un string indicando el tipo y el valor.

function describir(valor: string | number | boolean): string {
    if (typeof valor === 'string') {
        return `Es un string con longitud ${valor.length}`;
    } else if (typeof valor === 'number') {
        return `Es un número con valor ${valor}`;
    } else {
        return `Es un boolean con valor ${valor}`;
    }
}

console.log(describir('hola'));
console.log(describir(42));
console.log(describir(true));

// Explicación:
// Uso un union (string | number | boolean). Con typeof voy reduciendo (narrowing) el tipo para acceder a propiedades seguras.
