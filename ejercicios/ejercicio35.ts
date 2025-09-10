// Nivel: 5
// Ejercicio 35: Obtener los nombres de un array de objetos persona
interface Persona { nombre: string; edad: number; }
function obtenerNombres(personas: Persona[]): string[] {
    return personas.map(p => p.nombre);
}

console.log(obtenerNombres([{ nombre: 'Ana', edad: 20 }, { nombre: 'Luis', edad: 25 }])); // ['Ana','Luis']

// Explicación:
// Usé map para sacar solo el nombre de cada persona del array.
