// Ejercicio 14: Contar cuántas veces aparece un número en un array
// Nivel: 3
function contarApariciones(arr: number[], num: number): number {
    return arr.filter(n => n === num).length;
}

console.log(contarApariciones([1, 2, 3, 2, 4, 2, 5], 2)); // 3

// Explicación:
// Usé filter para contar cuántos elementos son iguales al número que busco.
