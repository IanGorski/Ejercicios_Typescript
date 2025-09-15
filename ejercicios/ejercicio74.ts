// Ejercicio 74 - Nivel: 9
// Consigna: Implementar withTimeout(promise, ms) que rechace si la promesa no se resuelve en el tiempo indicado.

export function withTimeout<T>(promesa: Promise<T>, ms: number): Promise<T> {
    return new Promise<T>((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error('Timeout excedido')), ms);
        promesa.then(
            v => { clearTimeout(timer); resolve(v); },
            e => { clearTimeout(timer); reject(e); }
        );
    });
}

const lenta = new Promise(res => setTimeout(() => res('listo'), 300));
withTimeout(lenta, 100).catch(e => console.log('Falló por timeout:', (e as Error).message));

// Explicación:
// Corro una carrera entre la promesa original y un setTimeout que rechaza.
// Limpio el timer al resolver o rechazar para evitar fugas.
