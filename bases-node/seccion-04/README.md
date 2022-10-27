# Bases de Node
Vamos a ver las bases de node.
Realizamos una aplicacion de consola.


Una aplicacion de consola es cuando utilizamos commandos ya prefabricados y recibir un mensaje.
Vamos a hablar sobre el packages.json, nmp y utilidad de librerias de terceros.

La sección se enfoca en los siguientes temas:

 - Requerir información de otros archivos
 - Requerir paquetes
 - Importar archivos personalizados
 - NPM
 - Install
 - Uninstall
 - Package.json
 - Yargs
 - Recibir parámetros por línea de comando
 - Colores para la consola



## Requerir paquetes  - require 
En node tenemos el control del backend en donde los estamos ejecutando (el servidor que lo ejecute).Como:

- Grabar archivos 
- Mover Archivos
- Eliminar Directorios

### Fyle System 
El fyle system nos permite manipular y controllar archivos que se encuentren en nuestra pc o crear archivos en determinados directorios.

**fs-write**: Crea un archivo
**fs-writeFileSync:**Crea un archivo es mas facil de utilizar y podemos atrapar los errores con try y catch.    



## Recibir informacion desde linea de  comando

Podemos escribir un comando predeterminado desde linea de comando con la bandera --micomando=5 .Ya que al ejecutar ese comando esta creando ese espacio en memoria donde voy a tener ese --micomando. 

**process.argv:** Nos da 2 argumentos el primero es el path donde se encuentra nuestra aplicacion instalada de manera global. Y el segundo es donde se encuentra ejecutada nuestra aplicacion.

**agregar argumentos a mi process.arg:**Si le enviamos un comando ej: --micomando=5 y se agrega como argumento del process.argv

Esto puede ser util para hacer aplicaciones de consolas y tener nuestros propios comandos de tipo --help o para ejecutar un codigo con una configuracion ya definida.

Pero a la hora de hace rnuestros comandos hay que validar muchas cuestiones por lo que se recomienda utilizar una libreria llamada yargs.


## Npm y el Package.json

Sirve para ocupar paquetes de terceros y tener librerias externas en nuestras aplicaciones.


Comando para iniciarlizar mi package.json:

```bash
npm init
```
**version:**Semantica de versionamiento,versiones mayores, adiciones siempre a la misma version, bugfixes.
**descripcion:**Descripcion del proyecto 
**Punto de inicio:**Recomiendo el app.js
**Test command:**Es un comando que podemos agregar para hacer pruebas unitarias y de integracion
**Gir repository:**Repositorio de git
**keywords:**Es para ayudarnos cuando subamos la app a npm para que los usuarios cuando busquen nuestro paquete se encuentre por esta palabra.
**Author:**Author del proyecto
**License:** Tipo de licencias

Para que sirve el package.json