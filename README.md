# Ejercicios de TypeScript

Este repositorio contiene ejercicios prácticos de TypeScript organizados por nivel de dificultad (ahora del 2 al 10). Cada archivo incluye la consigna, la solución y una explicación sencilla pensada para quienes están aprendiendo como yo. Fui expandiendo progresivamente los conceptos: fundamentos, colecciones, funciones, objetos, luego genéricos, tipos condicionales, utilidades avanzadas, patrones y asincronía.

## Niveles
## Índice por temas

**Fundamentos / Sintaxis básica:** 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

**Operaciones numéricas y lógicas:** 4, 5, 10, 16, 17, 20, 25, 28, 31, 40

**Strings / Texto:** 3, 12, 13, 24, 27, 39, 42, 49

**Arrays y colecciones (básico):** 11, 14, 15, 18, 19, 22, 23, 26, 28, 29, 30, 31, 32, 33

**Objetos y manipulación de datos:** 34, 35, 36, 37, 38, 41, 43, 44, 45, 46, 47, 56, 59, 68

**Fechas y formato:** 47

**Validación / Sanitización:** 24, 38, 48, 50, 70, 80

**Funciones y parámetros avanzados:** 18, 19, 33, 34, 51, 52, 53, 58, 62, 63, 77

**Type Guards y Narrowing:** 54, 55, 57, 69, 70, 79

**Genéricos esenciales:** 51, 52, 53, 56, 59, 61, 62, 63

**Mapped / Utility / Transformación de tipos:** 59, 64, 65, 66, 67, 75, 76, 80

**Inferencia avanzada (infer):** 64, 65, 66, 67, 75, 76, 79, 80

**Patrones de diseño / estructurales:** 61 (EventEmitter), 63 (compose), 68 (Builder), 77 (pipeline async), 78 (memoize)

**Asincronía / Promesas:** 71, 72, 73, 74, 75, 77, 78

**Optimización y caching:** 71 (manejo error), 73 (reintentos), 74 (timeout), 78 (memoization TTL)

**Uniones discriminadas:** 54, 57, 69 (branded), 70 (guard complejo), 79

**Mini DSL / Validadores:** 80

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
