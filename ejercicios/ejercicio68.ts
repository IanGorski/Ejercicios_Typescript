// Ejercicio 68 - Nivel: 8
// Consigna: Implementar un Builder simple para crear un objeto Usuario paso a paso con métodos encadenables.


interface UsuarioB {
    nombre: string;
    email: string;
    activo: boolean;
}

class UsuarioBuilder {
    private _data: Partial<UsuarioB> = {};
    nombre(nombre: string) { this._data.nombre = nombre; return this; }
    email(email: string) { this._data.email = email; return this; }
    activo(activo: boolean) { this._data.activo = activo; return this; }
    build(): UsuarioB {
        if (!this._data.nombre || !this._data.email || this._data.activo === undefined) {
            throw new Error('Datos incompletos');
        }
        return this._data as UsuarioB;
    }
}

const usuarioCreado = new UsuarioBuilder().nombre('Ana').email('ana@test.com').activo(true).build();
console.log(usuarioCreado);

// Explicación:
// Cada método devuelve this para permitir encadenamiento. Al final build valida y retorna el objeto completo.
