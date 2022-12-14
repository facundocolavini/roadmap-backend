## Fundamentos de Node

Temas de la sección:
La sección se enfoca en los siguientes temas:

- ¿Por qué es tan popular Node?
- ¿Qué es blocking y non-blocking I/O?
- Realizar nuestro primer programa de Node
- Comprender como es que Node resuelve los procesos síncronos y asíncronos
- Comprender el ciclo de vida de un proceso en Node

## Preguntas de Node

### Que es Node ?

Node corre sobre el motor V8 de Google , el V8 es un engine de javaScript de alto desempeño que esta escrito en C++ (el mismo que usa google chrome) y trabaja traducciendo el codigo que escribimos en javaScript a codigo de maquina.
Node ejecuta javascript por fuera del navegador y nos da acceso a:

- Sistema de archivos del equipo.
- Informacion del Sistema Operativo.
- Procesos del equipo.
- Lenguaje de Backend.

### Por que es tan popular?

Entradas y salidas que no realizan bloqueos del servidor.
Es sumamente rapido y facil de configurar.
Mas de 470 mil paquetes disponibles (el ecosistema con mas librerias en el mundo).
Si sabes javaScript ya conoces la mayor parte de Node.

### Que puedo hacer con Node ?

Se puede utilizar para

**Sockets:** Uso de sockets para una comunicacion real Cliente-Servidor o Servidor-Cliente (ej: un chat).
**FyleSystem:**Manejo de archivos con FyleSystem y cargas simultaneas.
**Servidores:** Servidores Locales y remotos con informacion en tiempo real.
**Base de datos**:Conexiones a base de datos.
**Service Rest:** Creacion de servicios REST en segundos,generar nuestras propias APIS.

### Blocking Vs NoN Blocking I/O

## Ciclo de vida de un proceso en Node

En un proceso de Node tenemos lo siguiente

**Pila de Procesos (CallStack):**Almacena cada linea de mi codigo y proceso
**Node Apis:** Corren simultaneamente las tareas-Aca almacena comandos  o tareas donde se esperan las ejecuciones
**Cola de Callbacks** Son todos los procesos que estan listos para ser ejecutados pero espera a que la pila de procesos que corre Node termine.El primero que llega es el primero en ejecutarse

- Ejecuta el proceso main() ejecutando linea a linea el siguiente proceso en la pila:
  - Almacena en la pila el proceso (var,let,object)
  - Elimina de la pila ese proceso
- Finaliza el proceso main()

Si ejecutaramos una funcion

```js
function saludar(nombre) {
	let mensaje = `Hola ${nombre}`;
	return mensaje;
}

let saludo = saludar('Facundo');
console.log(saludo);
```

**Pila de Procesos(CallStack):**

- Ejecuta el proceso main()
  - Almacena en la pila el proceso saludar()
  - Pasa a la siguiente linea y lo almacena en la pila de procesos let saludo = saludar()
    - Comienza a trabajar con el bloque de condigo de la funcion de saludar()
      - almacena en la pila let mensaje
      - limpia en la pila let mensaje
      - almacena en la pila el return mensaje
      - limpia de la pila return mensaje
      - Termina el bloque de la funcion saludar()
  - Elimina de la pila de procesos saludar()
  - Empieza a ejecutar la linea de let saludo = saludar() ,saludo tiene un valor asi que pasa a la siguiente linea
  - Alacena en la pila el console.log(saludo)
    - Se ejecuta
    - Elimina el console.log(saludo) de la pila
- Fin del proceso main()

### Si ejecutamos algo asincronico en node

En este proceso tenemos tenemos el uso de:

**Pila de Procesos(CallStack)**

**Node Apis**

**Cola de Callbacks:**

```js
console.log('Inicio de programa'); // 1

setTimeout(() => {
	console.log('Primer Timeout'); // 5
}, 3000);

setTimeout(() => {
	console.log('Segundo Timeout'); // 3
}, 0);

setTimeout(() => {
	console.log('Tercer Timeout'); // 4
}, 0);

console.log('Fin de programa'); //2
```

Flujo de Node:

**Pila de Procesos(CallStack):**

- Crea el main en el CallStack
- Ejecuta la primera linea console.log('Inicio de programa');la almacena en el callStack y la quita
- Almacena la funcion en el CallStack y lo registra pero no lo ejecuta
  setTimeout(() => {
  console.log('Primer Timeout')
  }, 3000)
- Coloca a setTimeout en Node Api donde espera a que termine el 3 segundo del setTimeout 
- Luego registra el segundo setTimeout
- Pasa a la seccion de Node Api donde va a esperar a que terminen los 3 del setTimeout
- Registra el siguiente setTimeout 
- Lo envia a la pila de Node Api
- Para este instante el tiempo del segundo setTimeout ya debera ser ejecutada por que seguramente pasaron los 0 segundos.
- Manda el segundo setTimeout a la cola de callback
- Saca a mi main() de la pila de procesos
- Empieza a resolver la cola de callbacks donde tenemos el segundo setTimeout y el tercer setTimeout.
- Pasa el segundo setTimeout a la pila de procesos  y lo elimina de la pila de procesos
- Pasa el tercero setTimeout a la pila de procesos  y lo elimina de la pila de procesos
- Cuando pasan los 3 segundos node detecta que puede mover mi primer setTimeout a la cola de callback 
- Como ya se puede ejecutar lo mueve a la pila de procesos 
- Elimina el setTimeout de mi pila de proceso y termina el proceso

## NODEMON

 Nodemon va a ayudarnos a actualizar los cambios que tengamos en nuestros archivos .Escucha cualquier archivo js o json.
 Nodemon si detecta un cambio va a reiniciar y volver a ejecutar nuestros archivos.   
