// Ejercicio 61 - Nivel: 8
// Consigna: Crear un EventEmitter tipado que permita registrar listeners por evento y emitir valores
// asegurando el tipo del payload según el nombre del evento.

// Definimos un mapa de eventos: cada propiedad es el nombre del evento y su tipo el payload.
interface EventosApp {
    login: { usuario: string; hora: Date };
    logout: { usuario: string; hora: Date };
    mensaje: { de: string; texto: string };
}

class EventEmitter<Ev extends Record<string, any>> {
    private listeners: { [K in keyof Ev]?: Array<(payload: Ev[K]) => void> } = {};

    on<K extends keyof Ev>(evento: K, handler: (payload: Ev[K]) => void) {
        (this.listeners[evento] ||= []).push(handler);
    }

    off<K extends keyof Ev>(evento: K, handler: (payload: Ev[K]) => void) {
        const arr = this.listeners[evento];
        if (!arr) return;
        this.listeners[evento] = arr.filter(h => h !== handler);
    }

    emit<K extends keyof Ev>(evento: K, payload: Ev[K]) {
        this.listeners[evento]?.forEach(h => h(payload));
    }
}

const em = new EventEmitter<EventosApp>();

em.on('login', data => console.log('Login:', data.usuario, data.hora.toISOString()));
em.emit('login', { usuario: 'Ana', hora: new Date() });

// Explicación:
// Uso un genérico Ev que representa un mapa de eventos. on/emit reciben una clave K y el payload Ev[K].
// Así el compilador evita que emita un payload con forma incorrecta para un evento dado.
