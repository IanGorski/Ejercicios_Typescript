// Ejercicio 47 - Nivel: 5
// Consigna: Crear una función formatearFecha(date: Date) que devuelva un string en formato YYYY-MM-DD HH:MM:SS (24h).

function formatearFecha(date: Date): string {
    const pad = (n: number) => n.toString().padStart(2, '0');
    const y = date.getFullYear();
    const m = pad(date.getMonth() + 1);
    const d = pad(date.getDate());
    const h = pad(date.getHours());
    const mi = pad(date.getMinutes());
    const s = pad(date.getSeconds());
    return `${y}-${m}-${d} ${h}:${mi}:${s}`;
}

console.log(formatearFecha(new Date()));

// Explicación:
// Uso getFullYear, getMonth (+1), etc. Creo una función pad para asegurar dos dígitos.
// Construyo el string final con template literal.
