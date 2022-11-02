## Aprendiendo las bases de Node

Temas del curso:

- Crear backend server
- Crear servicios REST
- Subir y administrar archivos en el servidor
- Json web tokens
- Despliegues en Heroku
- Despliegues en Github y Git
- Crear aplicaciones usando sockets
- Aprender Y reforzar tu conocimiento de Node
- Aplicaciones de consola

## Trabajar las variables de entorno

Vamos a establecer las variables de entorno para tener contro de nuestras variables de entorno de nuestra aplicacion.
Utilizando process.env donde apareceran nuestras variables de entorno.

Para crear nuestras variables de entorno utilizamos dotenv que nos permite definir variables de entorno de una forma sencilla
Como se utiliza :

```
    import * as dotenv from 'dotenv';
    dotenv.config()
```

Y ya podremos utilizar nuestras variables de entorno
Creamos un archivo .env y dentro declaramos nuestras variables de entorno dotenv siempre va a tomar nuestras variables de entorno que declaremos ahi dentro como un string.

Importante: Usualmente las variables de entorno no se acostumbra a subirlas a github por que son accesos que nuestra aplicacion va a tener para hacer algunas pruebas.
Podemos hacer un example.env para subir ese archivo a github que es un ejemplo para saber que configurar en la ejecucion de mi aplicacion.
