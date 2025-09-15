// Ejercicio 59 - Nivel: 7
// Consigna: Crear una función aplicarOpcional<T>(obj: T, cambios: Partial<T>): T que devuelva un nuevo objeto combinando los cambios.

function aplicarOpcional<T>(obj: T, cambios: Partial<T>): T {
    return { ...obj, ...cambios };
}

interface ConfigApp { tema: string; idioma: string; version: number; }
const config: ConfigApp = { tema: 'claro', idioma: 'es', version: 1 };
const nuevaConfig = aplicarOpcional(config, { tema: 'oscuro' });
console.log(nuevaConfig);

// Explicación:
// Partial<T> vuelve todas las propiedades opcionales, así puedo pasar sólo algunas.
// Devuelvo un objeto nuevo combinando el original más los cambios.
