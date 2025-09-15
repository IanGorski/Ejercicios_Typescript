// Ejercicio 77 - Nivel: 10
// Consigna: Implementar pipelineAsync(funcs) que recibe funciones async unarias encadenadas;
// cada una recibe el resultado de la anterior.

export function pipelineAsync<A, B>(f1: (a: A) => Promise<B>): (a: A) => Promise<B>;
export function pipelineAsync<A, B, C>(f1: (a: A) => Promise<B>, f2: (b: B) => Promise<C>): (a: A) => Promise<C>;
export function pipelineAsync<A, B, C, D>(f1: (a: A) => Promise<B>, f2: (b: B) => Promise<C>, f3: (c: C) => Promise<D>): (a: A) => Promise<D>;
export function pipelineAsync(...funcs: Array<(x: any) => Promise<any>>) {
    return async (valorInicial: any) => {
        let actual = valorInicial;
        for (const f of funcs) {
            actual = await f(actual);
        }
        return actual;
    };
}

const f1 = async (n: number) => n + 1;
const f2 = async (n: number) => n * 2;
const f3 = async (n: number) => n - 3;
pipelineAsync(f1, f2, f3)(5).then(r => console.log('Resultado pipeline:', r));

// Explicación:
// Similar a compose pero secuencial y asíncrono de izquierda a derecha. Los overloads conservan tipos encadenados.
