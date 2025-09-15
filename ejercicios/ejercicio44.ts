// Ejercicio 44 - Nivel: 5
// Consigna: Implementar ordenarMultiple<T>(items, criterios) donde criterios es un array de funciones que devuelven
// valores a comparar en orden de prioridad. Similar a ordenamiento multi-columna.

function ordenarMultiple<T>(items: T[], criterios: Array<(item: T) => any>): T[] {
    return [...items].sort((a, b) => {
        for (const get of criterios) {
            const va = get(a);
            const vb = get(b);
            if (va < vb) return -1;
            if (va > vb) return 1;
        }
        return 0;
    });
}

interface PersonaOM { nombre: string; edad: number; ciudad: string; }
const personasOM: PersonaOM[] = [
    { nombre: 'Ana', edad: 30, ciudad: 'Buenos Aires' },
    { nombre: 'Luis', edad: 22, ciudad: 'Buenos Aires' },
    { nombre: 'Luis', edad: 22, ciudad: 'Córdoba' },
    { nombre: 'María', edad: 30, ciudad: 'Córdoba' }
];

const ordenadas = ordenarMultiple(personasOM, [p => p.nombre, p => p.edad, p => p.ciudad]);
console.log(ordenadas);

// Explicación:
// Copio el array para no mutar el original. Recorro cada criterio y comparo.
// Si encuentro diferencia, retorno inmediatamente. Si no, pasa al siguiente.
// Esto me enseña a construir un sort flexible.
