### Depuracion de Errores y el archivo tsconfig.json

La sección se enfoca en la depuración de errores y comprender el archivo de configuración de TypeScript (el tsconfig.json)

Puntualmente:

- Aprenderemos el ¿por qué siempre compila a JavaScript?
- Para que nos puede servir el archivo de configuración de TypeScript
- Realizaremos depuración de errores directamente a nuestros archivos de TypeScript
- Removeremos todos los comentarios en nuestro archivo de producción.
- Restringiremos al compilador que sólo vea ciertos archivos o carpetas
- Crearemos un archivo final de salida
- Aprenderemos a cambiar la version de JavaScript de salida

Adicionalmente tendrán el conocimiento necesario para compilar automáticamente cualquier archivo que se vaya creando al momento de ser insertado a nuestro proyecto.

# Depurar codigo de TypeScript 

Debemos cambiar en el tsconfig.json la propiedad sourMap a true y representa un mapa de la representacion propia de nuestro codigo en typescript.

## Sacar comentarios en mi archivo JavaScript 

Para remover los comentarios a la hora de transpilar nuestro codigo de ts a js debemos de ir al tsconfig y descomentar la propiedad removeComments en true.


## Excluir y Incluir carpetas y/o archivos

Si yo quisiera exluir  o incluir una carpeta para evitar qeu se transpile o que si transpile a codigo js debemos agregar a mi tsconfig.json la propiedad de

```json
    "exclude" : [
    "modules_exclude"
  ],
  "include": ["modules_include"]
```


## Centralizar Archivos de salida

Podemos controlar el orden de nuestros archivos de ts y js , donde podemos resumirlo a un archivo de ts y otro archivo de js.Siempre dependiendo lo que querramos hacer. Tener cuidado con el include a la hora de utilizar la prop outFile.

Esta propiedad transpila todos los modulos de mi aplicacion y los une en un archivo que le especifique.Al especificar un archivo de salida se pueden eliminar todos los archivos js que se me generaron de mis modulos.

```
    outFile:"./main.js"
```