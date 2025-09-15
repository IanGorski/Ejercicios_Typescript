// Ejercicio 46 - Nivel: 5
// Consigna: Implementar paginate<T>(items: T[], page: number, perPage: number) que retorne un objeto con:
// { page, perPage, total, totalPages, data }.

function paginate<T>(items: T[], page: number, perPage: number) {
    const total = items.length;
    const totalPages = Math.max(1, Math.ceil(total / perPage));
    const current = Math.min(Math.max(1, page), totalPages);
    const start = (current - 1) * perPage;
    const data = items.slice(start, start + perPage);
    return { page: current, perPage, total, totalPages, data };
}

console.log(paginate([1, 2, 3, 4, 5, 6, 7], 2, 3));

// Calculo total y totalPages. Aseguro que la página esté dentro de los límites.
// Hago slice para extraer la porción correspondiente. Devuelvo un objeto con metadata.
