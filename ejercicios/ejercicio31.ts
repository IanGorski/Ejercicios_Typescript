// Nivel: 4
// Ejercicio 31: Crear un array con los cuadrados de los números del 1 al 10
function cuadrados(): number[] {
    let arr: number[] = [];
    for (let i = 1; i <= 10; i++) {
        arr.push(i * i);
    }
    return arr;
}

console.log(cuadrados()); // [1,4,9,16,25,36,49,64,81,100]

// Explicación:
// Usé un for para ir del 1 al 10 y guardé cada número al cuadrado en un array.
