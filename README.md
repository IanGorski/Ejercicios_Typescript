# Ejercicios de TypeScript

Este repositorio contiene ejercicios prácticos de TypeScript organizados por nivel de dificultad (ahora del 2 al 10). Cada archivo incluye la consigna, la solución y una explicación sencilla pensada para quienes están aprendiendo como yo. Fui expandiendo progresivamente los conceptos: fundamentos, colecciones, funciones, objetos, luego genéricos, tipos condicionales, utilidades avanzadas, patrones y asincronía.

> Nota: Los ejercicios 41–80 introducen una progresión hacia temas avanzados: primero consolidación de arrays y manipulación (41–50), luego genéricos, unions y type predicates (51–60), patrones y utilidades profundas (61–70) y finalmente asincronía, tipos condicionales e inferencias complejas (71–80).

## Lista de ejercicios

| Archivo         | Nivel | Descripción breve                                 |
|-----------------|-------|--------------------------------------------------|
| ejercicio01.ts  | 2     | Mostrar un mensaje por consola                   |
| ejercicio02.ts  | 2     | Retornar un número fijo                          |
| ejercicio03.ts  | 2     | Retornar un string fijo                          |
| ejercicio04.ts  | 2     | Sumar uno a un número                            |
| ejercicio05.ts  | 2     | Multiplicar por dos                              |
| ejercicio06.ts  | 2     | Retornar true                                    |
| ejercicio07.ts  | 2     | Retornar false                                   |
| ejercicio08.ts  | 2     | Recibir y mostrar un string                      |
| ejercicio09.ts  | 2     | Recibir y mostrar un número                      |
| ejercicio10.ts  | 2     | Tabla de multiplicar                             |
| ejercicio11.ts  | 3     | Obtener el menor de un array de números          |
| ejercicio12.ts  | 3     | Contar vocales en un string                      |
| ejercicio13.ts  | 3     | Invertir un string                               |
| ejercicio14.ts  | 3     | Contar cuántas veces aparece un número en un array|
| ejercicio15.ts  | 3     | Concatenar dos arrays                            |
| ejercicio16.ts  | 3     | Área de un triángulo                             |
| ejercicio17.ts  | 3     | Número par o impar                               |
| ejercicio18.ts  | 3     | Parámetro opcional                               |
| ejercicio19.ts  | 3     | Función flecha                                   |
| ejercicio20.ts  | 3     | Suma de dos números                              |
| ejercicio21.ts  | 3     | Saludo personalizado                             |
| ejercicio22.ts  | 4     | Suma de array                                    |
| ejercicio23.ts  | 4     | Sumar solo los números positivos de un array     |
| ejercicio24.ts  | 4     | Verificar si un string es palíndromo             |
| ejercicio25.ts  | 4     | Obtener el promedio de un array de números       |
| ejercicio26.ts  | 4     | Obtener los números mayores a un valor dado      |
| ejercicio27.ts  | 4     | Contar palabras en una frase                     |
| ejercicio28.ts  | 4     | Multiplicar todos los elementos de un array por un número |
| ejercicio29.ts  | 4     | Obtener el primer número impar de un array       |
| ejercicio30.ts  | 4     | Multiplicar todos los elementos de un array por un número |
| ejercicio31.ts  | 4     | Crear un array con los cuadrados de los números del 1 al 10 |
| ejercicio32.ts  | 4     | Array de números                                 |
| ejercicio33.ts  | 4     | Parámetros REST                                  |
| ejercicio34.ts  | 4     | Tipado de función                                |
| ejercicio35.ts  | 5     | Obtener los nombres de un array de objetos persona|
| ejercicio36.ts  | 5     | Buscar un objeto por nombre en un array          |
| ejercicio37.ts  | 5     | Sumar edades de un array de personas             |
| ejercicio38.ts  | 5     | Verificar si todos los números de un array son positivos |
| ejercicio39.ts  | 5     | Reemplazar todas las apariciones de una palabra en un texto |
| ejercicio40.ts  | 5     | Obtener la suma de los dígitos de un número      |
| ejercicio41.ts  | 5     | Agrupar elementos de un array (groupBy)          |
| ejercicio42.ts  | 5     | Frecuencia de palabras en un texto               |
| ejercicio43.ts  | 5     | Eliminar duplicados de un array                  |
| ejercicio44.ts  | 5     | Ordenar por múltiples campos                     |
| ejercicio45.ts  | 5     | Mezclar (shuffle) un array                       |
| ejercicio46.ts  | 5     | Paginar un array                                 |
| ejercicio47.ts  | 5     | Formatear fecha a string simple                  |
| ejercicio48.ts  | 5     | Validar fortaleza de contraseña                  |
| ejercicio49.ts  | 5     | Crear un slug URL-friendly                       |
| ejercicio50.ts  | 5     | Ejecutar función con captura de error            |
| ejercicio51.ts  | 6     | Función identidad genérica                       |
| ejercicio52.ts  | 6     | Obtener primer elemento tipado                   |
| ejercicio53.ts  | 6     | Extraer propiedad genérica                       |
| ejercicio54.ts  | 6     | Describir valor segun su tipo (union)            |
| ejercicio55.ts  | 6     | Type predicate esStringArray                     |
| ejercicio56.ts  | 6     | Merge de objetos con intersección de tipos       |
| ejercicio57.ts  | 7     | Render estado (union discriminada)               |
| ejercicio58.ts  | 7     | Sobrecarga concatenar valores                    |
| ejercicio59.ts  | 7     | Aplicar Partial a objeto (opcional)              |
| ejercicio60.ts  | 7     | Acceso seguro a tupla con flag                   |
| ejercicio61.ts  | 8     | EventEmitter tipado                              |
| ejercicio62.ts  | 8     | Currificar función de dos parámetros             |
| ejercicio63.ts  | 8     | Compose de funciones unarias                     |
| ejercicio64.ts  | 8     | DeepReadonly recursivo básico                    |
| ejercicio65.ts  | 8     | DeepPartial recursivo básico                     |
| ejercicio66.ts  | 8     | Inferir tipo de retorno (ReturnType)             |
| ejercicio67.ts  | 8     | Inferir parámetros de función (Parameters)       |
| ejercicio68.ts  | 8     | Builder pattern simple                           |
| ejercicio69.ts  | 8     | Branded type para IDs                            |
| ejercicio70.ts  | 8     | Type guard complejo                              |
| ejercicio71.ts  | 9     | wrapAsync retorno [error, data]                  |
| ejercicio72.ts  | 9     | Promise.all tipado con tuplas                    |
| ejercicio73.ts  | 9     | retryAsync con intentos y delay                  |
| ejercicio74.ts  | 9     | withTimeout para promesas lentas                 |
| ejercicio75.ts  | 9     | Tipo MiAwaited recursivo                         |
| ejercicio76.ts  | 10    | Tipo If condicional simple                       |
| ejercicio77.ts  | 10    | pipelineAsync secuencial                         |
| ejercicio78.ts  | 10    | memoizeAsync con TTL                             |
| ejercicio79.ts  | 10    | Extraer literales de union discriminada          |
| ejercicio80.ts  | 10    | Mini sistema de validación con Infer             |

## Índice por temas

**Fundamentos / Sintaxis básica:** [1](ejercicios/ejercicio01.ts), [2](ejercicios/ejercicio02.ts), [3](ejercicios/ejercicio03.ts), [4](ejercicios/ejercicio04.ts), [5](ejercicios/ejercicio05.ts), [6](ejercicios/ejercicio06.ts), [7](ejercicios/ejercicio07.ts), [8](ejercicios/ejercicio08.ts), [9](ejercicios/ejercicio09.ts), [10](ejercicios/ejercicio10.ts)

**Operaciones numéricas y lógicas:** [4](ejercicios/ejercicio04.ts), [5](ejercicios/ejercicio05.ts), [10](ejercicios/ejercicio10.ts), [16](ejercicios/ejercicio16.ts), [17](ejercicios/ejercicio17.ts), [20](ejercicios/ejercicio20.ts), [25](ejercicios/ejercicio25.ts), [28](ejercicios/ejercicio28.ts), [31](ejercicios/ejercicio31.ts), [40](ejercicios/ejercicio40.ts)

**Strings / Texto:** [3](ejercicios/ejercicio03.ts), [12](ejercicios/ejercicio12.ts), [13](ejercicios/ejercicio13.ts), [24](ejercicios/ejercicio24.ts), [27](ejercicios/ejercicio27.ts), [39](ejercicios/ejercicio39.ts), [42](ejercicios/ejercicio42.ts), [49](ejercicios/ejercicio49.ts)

**Arrays y colecciones (básico):** [11](ejercicios/ejercicio11.ts), [14](ejercicios/ejercicio14.ts), [15](ejercicios/ejercicio15.ts), [18](ejercicios/ejercicio18.ts), [19](ejercicios/ejercicio19.ts), [22](ejercicios/ejercicio22.ts), [23](ejercicios/ejercicio23.ts), [26](ejercicios/ejercicio26.ts), [28](ejercicios/ejercicio28.ts), [29](ejercicios/ejercicio29.ts), [30](ejercicios/ejercicio30.ts), [31](ejercicios/ejercicio31.ts), [32](ejercicios/ejercicio32.ts), [33](ejercicios/ejercicio33.ts)

**Objetos y manipulación de datos:** [34](ejercicios/ejercicio34.ts), [35](ejercicios/ejercicio35.ts), [36](ejercicios/ejercicio36.ts), [37](ejercicios/ejercicio37.ts), [38](ejercicios/ejercicio38.ts), [41](ejercicios/ejercicio41.ts), [43](ejercicios/ejercicio43.ts), [44](ejercicios/ejercicio44.ts), [45](ejercicios/ejercicio45.ts), [46](ejercicios/ejercicio46.ts), [47](ejercicios/ejercicio47.ts), [56](ejercicios/ejercicio56.ts), [59](ejercicios/ejercicio59.ts), [68](ejercicios/ejercicio68.ts)

**Fechas y formato:** [47](ejercicios/ejercicio47.ts)

**Validación / Sanitización:** [24](ejercicios/ejercicio24.ts), [38](ejercicios/ejercicio38.ts), [48](ejercicios/ejercicio48.ts), [50](ejercicios/ejercicio50.ts), [70](ejercicios/ejercicio70.ts), [80](ejercicios/ejercicio80.ts)

**Funciones y parámetros avanzados:** [18](ejercicios/ejercicio18.ts), [19](ejercicios/ejercicio19.ts), [33](ejercicios/ejercicio33.ts), [34](ejercicios/ejercicio34.ts), [51](ejercicios/ejercicio51.ts), [52](ejercicios/ejercicio52.ts), [53](ejercicios/ejercicio53.ts), [58](ejercicios/ejercicio58.ts), [62](ejercicios/ejercicio62.ts), [63](ejercicios/ejercicio63.ts), [77](ejercicios/ejercicio77.ts)

**Type Guards y Narrowing:** [54](ejercicios/ejercicio54.ts), [55](ejercicios/ejercicio55.ts), [57](ejercicios/ejercicio57.ts), [69](ejercicios/ejercicio69.ts), [70](ejercicios/ejercicio70.ts), [79](ejercicios/ejercicio79.ts)

**Genéricos esenciales:** [51](ejercicios/ejercicio51.ts), [52](ejercicios/ejercicio52.ts), [53](ejercicios/ejercicio53.ts), [56](ejercicios/ejercicio56.ts), [59](ejercicios/ejercicio59.ts), [61](ejercicios/ejercicio61.ts), [62](ejercicios/ejercicio62.ts), [63](ejercicios/ejercicio63.ts)

**Mapped / Utility / Transformación de tipos:** [59](ejercicios/ejercicio59.ts), [64](ejercicios/ejercicio64.ts), [65](ejercicios/ejercicio65.ts), [66](ejercicios/ejercicio66.ts), [67](ejercicios/ejercicio67.ts), [75](ejercicios/ejercicio75.ts), [76](ejercicios/ejercicio76.ts), [80](ejercicios/ejercicio80.ts)

**Inferencia avanzada (infer):** [64](ejercicios/ejercicio64.ts), [65](ejercicios/ejercicio65.ts), [66](ejercicios/ejercicio66.ts), [67](ejercicios/ejercicio67.ts), [75](ejercicios/ejercicio75.ts), [76](ejercicios/ejercicio76.ts), [79](ejercicios/ejercicio79.ts), [80](ejercicios/ejercicio80.ts)

**Patrones de diseño / estructurales:** [61](ejercicios/ejercicio61.ts) (EventEmitter), [63](ejercicios/ejercicio63.ts) (compose), [68](ejercicios/ejercicio68.ts) (Builder), [77](ejercicios/ejercicio77.ts) (pipeline async), [78](ejercicios/ejercicio78.ts) (memoize)

**Asincronía / Promesas:** [71](ejercicios/ejercicio71.ts), [72](ejercicios/ejercicio72.ts), [73](ejercicios/ejercicio73.ts), [74](ejercicios/ejercicio74.ts), [75](ejercicios/ejercicio75.ts), [77](ejercicios/ejercicio77.ts), [78](ejercicios/ejercicio78.ts)

**Optimización y caching:** [71](ejercicios/ejercicio71.ts) (manejo error), [73](ejercicios/ejercicio73.ts) (reintentos), [74](ejercicios/ejercicio74.ts) (timeout), [78](ejercicios/ejercicio78.ts) (memoization TTL)

**Uniones discriminadas:** [54](ejercicios/ejercicio54.ts), [57](ejercicios/ejercicio57.ts), [69](ejercicios/ejercicio69.ts) (branded), [70](ejercicios/ejercicio70.ts) (guard complejo), [79](ejercicios/ejercicio79.ts)

**Mini DSL / Validadores:** [80](ejercicios/ejercicio80.ts)
