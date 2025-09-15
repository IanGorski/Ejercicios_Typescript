// Ejercicio 80 - Nivel: 10
// Consigna: Crear un mini sistema de validación con funciones schema (string(), number(), boolean(), object({...}))
// que retornen un validador { parse(value) } y un tipo Infer<T> que derive el tipo validado.

// Validador genérico 
interface Validador<T> { parse(v: unknown): T; }

// Constructores básicos
export function stringV(): Validador<string> {
    return { parse(v) { if (typeof v !== 'string') throw new Error('Esperaba string'); return v; } };
}
export function numberV(): Validador<number> {
    return { parse(v) { if (typeof v !== 'number') throw new Error('Esperaba number'); return v; } };
}
export function booleanV(): Validador<boolean> {
    return { parse(v) { if (typeof v !== 'boolean') throw new Error('Esperaba boolean'); return v; } };
}

// Objetos: recibe un shape y valida cada propiedad
export function objectV<S extends Record<string, Validador<any>>>(shape: S): Validador<{ [K in keyof S]: Infer<S[K]> }> {
    return {
        parse(v: unknown) {
            if (typeof v !== 'object' || v === null) throw new Error('Esperaba objeto');
            const out: any = {};
            for (const k in shape) {
                out[k] = shape[k].parse((v as any)[k]);
            }
            return out;
        }
    };
}

// Inferir el tipo a partir de un validador
export type Infer<V> = V extends Validador<infer T> ? T : never;

const UsuarioSchema = objectV({
    nombre: stringV(),
    edad: numberV(),
    activo: booleanV()
});

type UsuarioInferido = Infer<typeof UsuarioSchema>; // { nombre: string; edad: number; activo: boolean }

const instancia = UsuarioSchema.parse({ nombre: 'Ana', edad: 30, activo: true });
console.log(instancia);

// Explicación:
// Cada función constructora retorna un Validador<T>. objectV combina validadores y construye el objeto final.
// El tipo Infer usa conditional con infer para extraer el tipo validado. Así se asocia lógica runtime y tipado.
