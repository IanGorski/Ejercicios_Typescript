// Nivel: 5
// Ejercicio 37: Sumar edades de un array de personas
interface Persona { nombre: string; edad: number; }
function sumarEdades(personas: Persona[]): number {
    return personas.reduce((acc, p) => acc + p.edad, 0);
}

console.log(sumarEdades([{ nombre: 'Ana', edad: 20 }, { nombre: 'Luis', edad: 25 }])); // 45

// Explicación:
// Usé reduce para sumar la propiedad edad de cada persona.
