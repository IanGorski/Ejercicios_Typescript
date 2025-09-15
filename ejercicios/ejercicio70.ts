// Ejercicio 70 - Nivel: 8
// Consigna: Implementar un type guard complejo esPerfil(val: any): val is Perfil que verifique estructura anidada.

interface Perfil {
    id: number;
    nombre: string;
    contacto: { email: string; telefono?: string };
    roles: string[];
}

function esPerfil(val: any): val is Perfil {
    return typeof val === 'object' && val !== null &&
        typeof val.id === 'number' &&
        typeof val.nombre === 'string' &&
        typeof val.contacto === 'object' && val.contacto !== null &&
        typeof val.contacto.email === 'string' &&
        Array.isArray(val.roles) && val.roles.every((r: any) => typeof r === 'string');
}

const posible: unknown = { id: 1, nombre: 'Ana', contacto: { email: 'a@a.com' }, roles: ['admin'] };
if (esPerfil(posible)) {
    console.log('Perfil válido de', posible.nombre);
}

// Explicación:
// Verifico cada propiedad para asegurar forma. Con el type predicate el compilador sabe que dentro del if es Perfil.
