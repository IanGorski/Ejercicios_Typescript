// Ejercicio 10: Tabla de multiplicar
// Nivel: 2
function tablaMultiplicar(num: number): number[] {
    let tabla: number[] = [];
    for (let i = 1; i <= 10; i++) {
        tabla.push(num * i);
    }
    return tabla;
}

console.log(tablaMultiplicar(3)); // [3,6,9,12,15,18,21,24,27,30]

// Explicación:
// Quise hacer una función que me dé la tabla de multiplicar de un número. Usé un for para ir multiplicando y guardando los resultados en un array.
// Así puedo ver toda la tabla junta cuando la imprimo en la consola.
