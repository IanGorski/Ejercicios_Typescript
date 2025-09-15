// Ejercicio 66 - Nivel: 8
// Consigna: Implementar misReturnType<F> que extraiga el tipo de retorno de una función.

type MisReturnType<F> = F extends (...args: any[]) => infer R ? R : never;

function fabricaNumero() { return 123; }
function fabricaPromesa() { return Promise.resolve('ok'); }

const r1: MisReturnType<typeof fabricaNumero> = 123;
const r2: MisReturnType<typeof fabricaPromesa> = Promise.resolve('ok');

// Explicación:
// Uso infer R dentro del condicional para capturar el tipo de retorno de la función dada.
// Si no es función, retorna never.
