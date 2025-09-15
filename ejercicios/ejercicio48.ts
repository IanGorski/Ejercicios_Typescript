// Ejercicio 48 - Nivel: 5
// Consigna: Crear una función validarPassword(pwd: string) que devuelva un objeto:
// { lengthOk: boolean, tieneMayus: boolean, tieneNumero: boolean, tieneSimbolo: boolean, valida: boolean }
// Reglas: longitud >= 8, al menos una mayúscula, un número y un símbolo !@#$%^&*.

function validarPassword(pwd: string) {
    const lengthOk = pwd.length >= 8;
    const tieneMayus = /[A-Z]/.test(pwd);
    const tieneNumero = /\d/.test(pwd);
    const tieneSimbolo = /[!@#$%^&*]/.test(pwd);
    const valida = lengthOk && tieneMayus && tieneNumero && tieneSimbolo;
    return { lengthOk, tieneMayus, tieneNumero, tieneSimbolo, valida };
}

console.log(validarPassword('Abcdef1!'));
console.log(validarPassword('abc'));

// Explicación:
// Hago tests separados para cada criterio y después un booleano final.
// Aprendo a devolver diagnósticos detallados en lugar de solo true/false.
