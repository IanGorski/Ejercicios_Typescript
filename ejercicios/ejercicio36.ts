// Nivel: 5
// Ejercicio 36: Buscar un objeto por nombre en un array
interface Persona { nombre: string; edad: number; }
function buscarPorNombre(personas: Persona[], nombre: string): Persona | undefined {
    return personas.find(p => p.nombre === nombre);
}

console.log(buscarPorNombre([{ nombre: 'Ana', edad: 20 }, { nombre: 'Luis', edad: 25 }], 'Luis'));

// Explicación:
// Probé find para buscar el primer objeto que tenga el nombre que le paso.
