// Ejercicio 41 - Nivel: 5
// Consigna: Implementar una función groupBy<T, K extends keyof any>(items, getKey) que agrupe los elementos de un array en un objeto cuyas claves
// sean el resultado de aplicar getKey a cada elemento. Debe retornar un objeto donde cada propiedad es un array de elementos agrupados.
// Objetivo: Practicar genéricos, claves dinámicas y reducción.

function groupBy<T, K extends keyof any>(items: T[], getKey: (item: T) => K): Record<K, T[]> {
    return items.reduce((acc, item) => {
        const key = getKey(item);
        (acc[key] ||= []).push(item);
        return acc;
    }, {} as Record<K, T[]>);
}

interface PersonaGB { nombre: string; edad: number; ciudad: string; }
const personasGB: PersonaGB[] = [
    { nombre: 'Ana', edad: 30, ciudad: 'Buenos Aires' },
    { nombre: 'Luis', edad: 22, ciudad: 'Buenos Aires' },
    { nombre: 'María', edad: 30, ciudad: 'Córdoba' },
    { nombre: 'Juan', edad: 22, ciudad: 'Córdoba' }
];

const agrupadoPorEdad = groupBy(personasGB, p => p.edad);
console.log('Agrupado por edad:', agrupadoPorEdad);

// Explicación:
// Acá creé una función genérica con dos tipos: T (el tipo de los elementos) y K (el tipo de la clave).
// Uso reduce para construir un objeto. Si la clave todavía no existe, inicializo un array y luego pusheo el elemento.
// Esto me ayuda a entender cómo manejar estructuras más complejas con genéricos.
