### Aplicacion de clima

Vamos a intentar conectar nuestra aplicacion con un servicio externo  o una api.
Realizaremos peticiones http para intentar obtener la informacion de la API de clima gratuitas.


## La sección se enfoca en los siguientes temas:

- Consumo de APIs
- Llamadas HTTP hacia servidores externos
- Paquete request - superficialmente
- Paquete Axios
- Mapbox places para obtener lugares por nombre
- Uso de OpenWeather para obtener el clima
- Aplicación de consola con historial
- Variables de entorno



## Peticiones Http desde Node:

 - Con [fetch](https://www.npmjs.com/package/fetch)

 - Con [axios](https://www.npmjs.com/package/axios)


Node no conoce el fetch a pesar que sea un standar de EsmaScript y que es propio de los navegadores web .Si utilizaramos fetch nos daria un error por que no encontraria la referencia al fetch.
Para eso ocupamos un paquete externo para no tener que hacer demasiadas configuraciones y trabajar ya con esos paquetes.

fetch: fetch API lo utilizamos

- Desventaja: faltan formas de hacer Interceptores. 

Recomendacion utilizar Axios:

A diferencia a fetch axios trabaja en base a promesas si queremos hacer una peticion get y la respuesta nos la da en el then y resolvemos los errores con el catch.

Nos permite realizar las peticiones mas comunes como : GET, POST, PUT, DELETE.

Podemos crear una intancia en axios para configurar algunos parametros como :

 - baseUrl 
 - timeout
 - headers

Hay un sitio donde podemos realizar peticiones http de pruebas:
[reqres](https://reqres.in/)


https://www.mapbox.com/

https://docs.mapbox.com/api/search/geocoding/