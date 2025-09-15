// Ejercicio 45 - Nivel: 5
// Consigna: Crear una función mezclar<T>(items: T[]) que devuelva una nueva copia del array con los elementos en orden aleatorio (shuffle).

function mezclar<T>(items: T[]): T[] {
    const copia = [...items];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

console.log(mezclar([1, 2, 3, 4, 5]));

// Explicación:
// Hago una copia para no modificar el original. Luego aplico el algoritmo Fisher-Yates que garantiza aleatoriedad justa.
// Esto me ayuda a practicar loops y mutaciones controladas.
