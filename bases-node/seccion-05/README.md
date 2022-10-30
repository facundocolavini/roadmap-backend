## Temas de esta sección

El objetivo es que creemos una aplicación de consola interactiva, con opciones que se puedan seleccionar con las teclas direccionales, números y con la tecla espaciadora cuando hay multiples opciones.

Puntualmente sería:

- stdin
- stdout
- Ciclos
- Inquirer
- Clases en JavaScript
- Archivos JSON
- Fuertemente async y await
- Transformaciones

Esta es una aplicación real que les puede servir mucho cuando tengan que crear alguna aplicación de consola.

### Stdin y Stdout

**redline:** Para poder recibir una informacion del usuario o mostrarla debemos preparar la interface utilizando el paquete que viene propio en node llamado "readline" instalado no hay que instalarlo. En el cual le especificamos que vamos a utilizar en este caso el input y el output.

```js
const readLine = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});
```

**question:** Lo ocupamops si necesitamos el stdout para mostrar al usuario informacion por consola.
**stdin:** Podemos recibir una informacion del usuario que ingrese via teclado.
**stdout:** Envia informacion del usuario desde la consola.
