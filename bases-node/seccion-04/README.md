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

## Requerir paquetes - require

En node tenemos el control del backend en donde los estamos ejecutando (el servidor que lo ejecute).Como:

- Grabar archivos
- Mover Archivos
- Eliminar Directorios

### Fyle System

El fyle system nos permite manipular y controllar archivos que se encuentren en nuestra pc o crear archivos en determinados directorios.

**fs-write**: Crea un archivo
**fs-writeFileSync:**Crea un archivo es mas facil de utilizar y podemos atrapar los errores con try y catch.

## Recibir informacion desde linea de comando

Podemos escribir un comando predeterminado desde linea de comando con la bandera --micomando=5 .Ya que al ejecutar ese comando esta creando ese espacio en memoria donde voy a tener ese --micomando.

### Procedimientos de node

**process:** Objecto global de node
**process.argv:** Nos da 2 argumentos el primero es el path donde se encuentra nuestra aplicacion instalada de manera global. Y el segundo es donde se encuentra ejecutada nuestra aplicacion.

**agregar argumentos a mi process.argv:**Si le enviamos un comando ej: --micomando=5 y se agrega como argumento del process.argv

Esto puede ser util para hacer aplicaciones de consolas y tener nuestros propios comandos de tipo --help o para ejecutar un codigo con una configuracion ya definida.

Pero a la hora de hace rnuestros comandos hay que validar muchas cuestiones por lo que se recomienda utilizar una libreria llamada yargs.

## Npm y el Package.json

Sirve para ocupar paquetes de terceros y tener librerias externas en nuestras aplicaciones.

Comando para iniciarlizar mi package.json:

```bash
npm init
```

Podemos hacer nuestros propios scripts de ejecucion dentro del package.json:

```json
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1",
		"table": "nodemon app --base=5",
		"watch": "tsc -w"
	},
```

**version:**Semantica de versionamiento,versiones mayores, adiciones siempre a la misma version, bugfixes.
**descripcion:**Descripcion del proyecto
**Punto de inicio:**Recomiendo el app.js
**Test command:**Es un comando que podemos agregar para hacer pruebas unitarias y de integracion
**Gir repository:**Repositorio de git
**keywords:**Es para ayudarnos cuando subamos la app a npm para que los usuarios cuando busquen nuestro paquete se encuentre por esta palabra.
**Author:**Author del proyecto
**License:** Tipo de licencias

**dependencies:** Son paquetes necesarios para que se ejecute nuestra aplicacion.Hay que instalar las dependencias si se desea ejecutar nuestra aplicacion.
**package-lock.json:**Aca dice como fueron construidas las dependencias en el package.json. No se debe modificar, mantenerlo con la menor cantidad de modificaciones posibles.
**node_modules:**Esta carpeta almacena los paquetes que instalamos. Algunos paquetes son necesarios para que se ejecute algo.
**devDependencies:**Podemos instalar dependencias o paquetes que solo queremos usar en el modo de desarrollo. Para eso instalamos los paquetes con la siguiente bandera npm i nodemon --save-dev.Esto creara en mi package.json mi seccion de devDependecies.

### Instalar una version especifica de un paquete

Si quisieramos instalar una version especifica de algun paquete de terceros utilizamos los comandos:

**version especifica:** npm i colors@1.0.0
**NPM UPDATE:**Revisa las dependencias del paquete y lo actualiza automaticamente.Y cuidado por que tambien nos dice si hay conflictos. npm update.

### Yargs

- **DOCUMENTACION YARGS:** http://yargs.js.org/docs/

Yargs es una libreria que nos permite manejar nuevos parametros de ejecucion en el process de node de una forma mas facil de acceder a sus argumentos y controlarlos de mejor manera.
Yarg maneja los argumentos como un objeto a diferencias de process.argv que es un array y no podiamos controlar de la misma forma los argumentos que tenemos.

Para crear comandos debemos poner --micomando.

**comandos de ayudas de yarg:** Yargs nos proporciona algunas banderas utilez para utilizar

**--help:** Es un estandar que quiere decir dame todos los comandos que tenemos de ayuda de mi aplicacion. "node app --help".
**--version:** nos da la version que tenemos en nuestro package.json de nuestra aplicacion.Si cambiamos la version en el package.json tambien nos arrojara esa nueva version.

### Configuraciones de Yargs

**Abreviaturas en yargs:** Son comandos abreviados que podemos personalizar para que sean mas cortos o descriptivos ejemplo --base podemos llevarlo a -b.

Se pueden hacer banderas cortas de los comandos ej : node app -b 5
Salida:

`{ \_: [], b: 5, l: true, '$0': 'app' }`
**.option(key, [opt]):** Con este metodo podemos definir opciones y configurarlas a nuestros comandos de yargs.

- Con option podemos definir un comando reducido

```js
var argv = require('yargs/yargs')(process.argv.slice(2)).option('f', {
	alias: 'file', // f y file van a ser lo mismo
	demandOption: true, // le decimos que tiene requerido
	default: '/etc/passwd', // Valor por defecto
	describe: 'x marks the spot', // Descripcion
	type: 'string', // Cuando le definimos el tipo significa que va a ser siempre de ese tipo
}).argv;
```

**check(fn,[global=true]):** Verifica si ciertas condiciones son aplicadas. basicamente podemos validar el objeto argv para verificar si todo lo que mandamos como argumento se cumple o no.Lo mas importante es que si no cumple con las condiciones que pogamos no va a ejecutar mi programa.

## Git

Algunos items para prerar mi repositorio en GIT.

**gitignore:** Aca iran los archivos y direcotrios que no me interesan que se suban a nuestro repositorio

- **/outFiles/\*.txt:** Para ignorar todo el contenido de un directorio. En este ejemplo ignoro todos los archivos txt de mi directorio outFiles.Si mi carpeta outFiles no tiene nada adentro y aun asi necesito que si se suba a mi directorio si o si debe de contener aalgun archivo dentro para que se suba la carpeta outFiles.

**node_modules:** Evitar la carpeta node_modules donde se almacenan los modulos de tercero. Si necesito reconstruir mis modulos utilizar npm i.

**git init:** Para inicializar mi repositorio nos pararme en la raiz de mi proyecto.
**git add:** Commit es una fotografia de como luce mi codigo en ese momento.Se puede utilizar add . para añadir todos mis archivos a mi commit. Se le puede agregar un mensaje tambien con el -m "mi commit".
