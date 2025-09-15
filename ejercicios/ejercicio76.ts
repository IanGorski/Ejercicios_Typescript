// Ejercicio 76 - Nivel: 10
// Consigna: Definir un tipo If<Cond, Then, Else> que según un boolean literal (true/false) seleccione
// un tipo u otro. Mostrar ejemplos de distribución con unions.

export type If<C extends boolean, T, F> = C extends true ? T : F;

type Ej1 = If<true, string, number>;  
type Ej2 = If<false, string, number>; 
type Ej3 = If<boolean, string, number>; 

// Explicación:
// El conditional type evalúa C. Si es el literal true produce T, si es false produce F. Si C es boolean (union true|false)
// entonces se distribuye generando T | F.
