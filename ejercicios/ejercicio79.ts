// Ejercicio 79 - Nivel: 10
// Consigna: Dado un union discriminado por 'tipo', crear un tipo ExtraerTipos<U> que obtenga la union
// de los literales de la propiedad 'tipo' y una función groupByTipo que agrupe elementos por ese discriminante.

interface ADis { tipo: 'a'; valor: number; }
interface BDis { tipo: 'b'; texto: string; }
interface CDis { tipo: 'c'; activo: boolean; }
type UnionDis = ADis | BDis | CDis;

export type ExtraerTipos<U> = U extends { tipo: infer T extends string } ? T : never;

export function groupByTipo<T extends { tipo: string }>(items: T[]): Record<string, T[]> {
    return items.reduce<Record<string, T[]>>((acc, item) => {
        (acc[item.tipo] ||= []).push(item);
        return acc;
    }, {});
}

const items79: UnionDis[] = [
    { tipo: 'a', valor: 1 },
    { tipo: 'b', texto: 'hola' },
    { tipo: 'a', valor: 2 },
    { tipo: 'c', activo: true }
];
const agrupado = groupByTipo(items79);
console.log(agrupado);
type TiposUnion = ExtraerTipos<UnionDis>; // 'a' | 'b' | 'c'

// Explicación:
// ExtraerTipos usa infer sobre la propiedad discriminante. groupByTipo es runtime pero conserva el patrón.
// Demuestra cómo mezclar análisis de tipo y utilidad concreta.
