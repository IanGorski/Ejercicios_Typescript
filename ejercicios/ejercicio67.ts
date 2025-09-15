// Ejercicio 67 - Nivel: 8
// Consigna: Implementar misParameters<F> que extraiga las tuplas de parámetros de una función.

type MisParameters<F> = F extends (...args: infer P) => any ? P : never;

function combinar(a: number, b: string, c: boolean) { return `${a}-${b}-${c}`; }

const params: MisParameters<typeof combinar> = [1, 'x', true];
console.log(combinar(...params));

// Explicación:
// Con infer P capturo los parámetros en forma de tupla. Luego puedo reusarlos para invocar la función correctamente.
