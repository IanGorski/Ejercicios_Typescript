// Ejercicio 69 - Nivel: 8
// Consigna: Crear un tipo Id<T> que "marque" un string como ID de un tipo concreto (branded type) para evitar mezclar IDs.

type Id<T extends string> = string & { __brand: T };

function crearIdUsuario(valor: string): Id<'usuario'> {
  return valor as Id<'usuario'>;
}
function crearIdPedido(valor: string): Id<'pedido'> {
  return valor as Id<'pedido'>;
}

const idU = crearIdUsuario('u123');
const idP = crearIdPedido('p555');
// idU = idP; // Error si intento asignar (diferentes marcas)
console.log(idU, idP);

// Explicación:
// Agrego una propiedad ficticia __brand para diferenciar tipos que son strings pero representan entidades distintas.
// Esto ayuda a evitar errores al mezclar IDs.
