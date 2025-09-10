// Nivel: 3
// Ejercicio 18: Parámetro opcional
function nombreCompleto(nombre: string, apellido?: string): string {
    return apellido ? `${nombre} ${apellido}` : nombre;
}

console.log(nombreCompleto('Juan')); // Juan
console.log(nombreCompleto('Juan', 'López')); // Juan López

// Explicación:
// Acá probé cómo hacer para que un parámetro sea opcional. Si le paso el apellido, me muestra nombre y apellido.
// Si no le paso el apellido, solo muestra el nombre. Me sirvió para entender el signo de pregunta en los parámetros.
