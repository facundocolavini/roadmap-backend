## Tipados de typescript

¿Qué son los tipos de datos?

- Una introducción a los diferentes tipos de datos que existen en TypeScript.
- Booleanos.
- Números.
- Strings.
- Tipo Any.
- Arreglos.
- Tuplas.
- Enumeraciones
- Retorno void
- Null
- Undefined

Primitivos:

- Booleanos.
- Números.
- Strings.
- Symbolos.

Compuestos :

- Arreglos.
- Funciones.
- Clases.
- Objetos literales.

Tipos de datos de Typescript:

- Tuplas
- Interfaces
- Tipos
- Genericos

## Inferir tipos

UtilIza unas reglas en el codigo de ts con el que se define.

Inferidos:

```
const tipo: number = 10; // sabe que es un numero
let b = 10; // puede cambiar a cualquier tipo de dato por let
let c; // si defino una variable asi sin un tipo ni le asigno un valor tomara el tipo de la variable como un any
```

Recomendacion: Acostumbrar a que typescript no ponga los tipo por defecto , sino que nosotros debemos de poner los tipos esperados para nuestras definicionde variables.
