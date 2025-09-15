// Ejercicio 63 - Nivel: 8
// Consigna: Implementar compose(fns...) que reciba funciones unarias y devuelva una nueva que aplica las funciones de derecha a izquierda.

function compose<A, B, C>(f1: (b: B) => C, f2: (a: A) => B): (a: A) => C;
function compose<A, B, C, D>(f1: (c: C) => D, f2: (b: B) => C, f3: (a: A) => B): (a: A) => D;
function compose(...fns: Function[]) {
    return (valor: any) => fns.reduceRight((acc, fn) => fn(acc), valor);
}

const doble = (n: number) => n * 2;
const aTexto = (n: number) => `#${n}`;
const envolver = (s: string) => `[${s}]`;

const compuesta = compose(envolver, aTexto, doble);
console.log(compuesta(5));

// Explicación:
// Defino overloads para 2 y 3 funciones para mantener tipos.
// La implementación usa reduceRight para aplicar de derecha a izquierda.
