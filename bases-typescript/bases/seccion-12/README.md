Los decoradores son una característica nueva en el TypeScript que cada vez es más utilizada por otros frameworks como Angular 2. Pero vamos a aprender a utilizar decoradores en nuestros proyectos.

Puntualmente aprenderemos sobre:

¿Qué son los decoradores?
¿Para qué sirven?
Decoradores de clases
Decoradores de fabrica
Ejemplos prácticos
Decoradores anidados
Decoradores de métodos
Decoradores de propiedades
Decoradores de parámetros

https://www.typescriptlang.org/docs/handbook/decorators.html

# Que es un decorador

Un decorador es una funcion que se ejecuta en el momento de transpilacion o compilacion.
Es algo que nos permite expandirnos o agregar funcionalidades a un objeto,clase, metodo o una propiedad.Practicamente cualquier cosa.

Usualmente sirven para:

- Hacer mas facil la lectura de codigo
- Reutilizable o llevar la misma sintaxis

Se utilizo primero en angula y tambien los utiliza Nestjs.

## Como se define

Utilizando el @ , se utiliza un @ para saber que se esta utilizando un decorador.
Se pone antes de una clase, propiedd, metodo, funcion.

## Decoradores de Clase

Para poder utilizar un decorador debemos habilitar en el tsconfig la propiedad "experimentalDecorators": true.

## Factory Decorator

Un factory decorator no es mas que una funcion que retorna otra funcion, por lo que en su llamada se debe de ejecutar @mydecoradorFactory().
Los Factory Decorator sirven para recibir argumentos y definir su ejecucion y hacer una logica a partir de los argumentos que recive.
Se le puede definir como una funcion de flecha.Pero es recomendable usar function ya que al utilizar arrow function el contexto del this podria cambiar ya sea a una instancia global o la clase pero no tendriamos acceso directamente.

## Decoradores de Metodos

Podemos reemplazar los metodos o modificar la logica de los metodos de mis class utilizando este tipo de decorador de metodos.
Ejemplo: Hacer un sistema de validaciones en la ejecucion de mis metodos de mis clases.

## Decoradores de Propiedades

Esto es util si queremos proteger algunas propiedades que son publicas en mis class o privadas ya que las propiedades privadas todavia no es un estandar en las clases.
