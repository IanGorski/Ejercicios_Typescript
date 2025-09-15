// Ejercicio 62 - Nivel: 8
// Consigna: Implementar una función currificar que tome una función de dos parámetros y la convierta en
// una versión que se pueda llamar como f(a)(b).

function currificar<A, B, R>(fn: (a: A, b: B) => R): (a: A) => (b: B) => R {
  return (a: A) => (b: B) => fn(a, b);
}

const sumar2 = (a: number, b: number) => a + b;
const curried = currificar(sumar2);
console.log(curried(5)(10));

// Explicación:
// Transformo una función binaria en una función que retorna otra función.
// Los genéricos A, B, R mantienen los tipos originales de parámetros y retorno.
