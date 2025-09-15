// Ejercicio 58 - Nivel: 7
// Consigna: Implementar sobrecargas para una función concatenar que funcione así:
// concatenar(a: string, b: string): string
// concatenar(a: number, b: number): number
// Si son strings concatena, si son números suma.

function concatenar(a: string, b: string): string;
function concatenar(a: number, b: number): number;
function concatenar(a: any, b: any): any {
    if (typeof a === 'string' && typeof b === 'string') return a + b;
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    throw new Error('Tipos no soportados');
}

console.log(concatenar('Hola', ' Mundo'));
console.log(concatenar(10, 20));

// Explicación:
// Declaro las firmas específicas arriba y una implementación general debajo.
// TypeScript decide el tipo de retorno según la firma que matchee.
