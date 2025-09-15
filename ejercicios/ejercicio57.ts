// Ejercicio 57 - Nivel: 7
// Consigna: Modelar un estado de petición HTTP con un discriminated union:
// type Estado = { estado: 'idle' } | { estado: 'cargando' } | { estado: 'exito'; data: string } | { estado: 'error'; mensaje: string }
// Crear una función render(estado: Estado) que devuelva un string dependiendo del caso.

type Estado =
    | { estado: 'idle' }
    | { estado: 'cargando' }
    | { estado: 'exito'; data: string }
    | { estado: 'error'; mensaje: string };

function render(estado: Estado): string {
    switch (estado.estado) {
        case 'idle': return 'Esperando...';
        case 'cargando': return 'Cargando...';
        case 'exito': return 'Datos: ' + estado.data;
        case 'error': return 'Error: ' + estado.mensaje;
        default: const _exhaustive: never = estado; return _exhaustive; // Seguridad extra
    }
}

console.log(render({ estado: 'idle' }));
console.log(render({ estado: 'exito', data: 'OK' }));

// Explicación:
// El campo común 'estado' discrimina cada variante. El default con never me ayuda a detectar si agrego un caso nuevo y lo olvido aquí.
