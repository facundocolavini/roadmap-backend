## Hacemos nuestro servido de express basado en clases

Vamos a colorcar nuestra creacion de servidor de express dentro de una clase.
Para eso vamos a transformar lo que tenemos a una clase.

## Creamos nuestros Rest Endpoint

Crearemos nuestros endpoint y realizar 4 enpoints muy comunes cuando utilicemos crear nuestras propias API.
Estos endpoint son GET, PUT , DELETE, POST y lucen asi
Nosotros cada vez que solicitemos algo a travez de estos enpoint la respuesta recibida va a ser a travez de un formato JSON res.json().
Podemos mandarle mas propiedades y enviarle un status a nuestra respuesta

```
res.json({
    "msg": GET DATA API
})

// Con status
Podemos utililizarlo cuando la persona no este authenticada y enviarle un mensaje de error
res.status(403).json({
    "msg": UNAUTHORIZED RESPONSE
})

```

Ya nos devuelve el codigo de respuesta de la peticion si se hizo correctamente sera 200 si ocurrio un error 404 y asi.Por lo que no es necesario mandar en el cuerpo de la respuesta el codigo de error.

## Códigos de respuestas HTTP

Es muy importante que nuestros servicios siempre retornen un código de respuesta dependiendo de lo que suceda. Existe un estándar que les adjunto en un PDF, para que lo tengan a la mano.

```javascript
CODE NAME

100 Continue
101 Switching Protocols

// 200 Successful
200 OK                                                   // Everything is normal
201 Created
202 Accepted
203 Non-Authoritative Information
204 No Content
205 Reset Content
206 Partial Content

// 300 Redirectionm
300 Multiple Choices
301 Moved Permanently                                    // Update your URL, this has moved for good.
302 Found
303 See Other
304 Not Modified
305 Use Proxy
306 Unused
307 Temporary Redirect                                   // This is temporarly moved, don't update your bookmarks.

// 400 Client Error

400 Bad Request                                         // Server didn't understand the URL you gave it.
401 Unauthorized                                        // Must be authenticated
402 Payment Required                                    // Not used really
403 Forbidden                                           // Server refuses to give you a file, authentication won't help
404 Not Found                                           // A file doesn't exist at that address
405 Method Not Allowed
406 Not Acceptable
407 Proxy Authentication Required
408 Request Timeout                                     // Browser took too long to request something
409 Conflict
410 Gone
411 Lengh Required
412 Precondition Failed
413 Reqeust Entity Too Large
415 Unsupported Media Type
416 Request Range Not Satisfiable
417 Expectation Failed

// 500  Server Error

500 Internal                                            // Server Error Something on the server didn't work right.
501 Not Implemented
502 Bad Gateway
503 Service Unavailable                                // Too busy to respond to a client
504 Gateway Timeout
505 HTTP Version Not Supported

```

## CORS

Que hace cors?
Es un middleware, nos permite que definir quien puede acceder a nuestra REST API (que paginas web pueden acceder) o tambien podemos decir que todos puedan acceder a nuestra rest API.

Cors nos permite proteger nuestro servidor de una manera superficial pero los navegadores web nos dan error si nuestro cors no esta habilitados cuando intentemos llamar un endpoint.Podemos restringir origenes y hacer una lista de quien puede acceder a nuestro endpoint si la peticion viene de un sitio que definimos.

Postman se salta el cors de cierta manera pero siempre nosotros vamos a tener que configurar nuestro cors.

```

npm i cors

```

## Serpara las rutas y el controlador de la clase Server

Vamos a separar cada ruta en un archivo independiente dentro de una carpeta llamada ./routes.

Dentro de routes hacemos nuestros archivos de rutas donde vamos a manejar cada peticion correspondiente nombrandolas asi:

```
/routes
    |
    |/user.ts
```

## Controllers

En controller controlamos las funciones de nuestras routes.Para esto creamos una nueva carpeta controllers y creamos nuestros controladores.
En estos archivos creamos funciones de nuestras peticiones y las exportamos.

## POST PUT DELETE

Usualmente en estas peticiones podemos mandar un body en la peticion.
Podemos enviar un json valido dentro de ese body.
Nos vamos a comunicar en tipo json

express.json() Serealiza la informacion que le mandamos atravez del body y lo pasa a formato json.
