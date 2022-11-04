### Crear un server Http con node

- **http** : es un paquete que ya viene instalado en node.
- **http.createServer([options][, requestlistener]):** Crea servers http con node.
- **request:** Es toda la informacion que estan solicitando del url que me estan pidiendo en mi web.Solicitud a mi webserver.
- **response:** Es lo que mi servidor le va a responder a mi cliente.

## Request and Response

Cliente <---> Servidor

**Request:** Que es la request es lo que se esta solicitando por parte del cliente. Entiendase por cliente que puede ser cualquier persona que se conecte a nuestro webserver o intentando acceder a un recurso de mi servidor.
Si no se finaliza con end no termina de cargar por que esperamos a que nuestro backend que le responda.
**Response**:La response es lo que nuestro server va a responder cuando procesemos esa request.
**status:** Estado de la respuesta generalmente se maneja por un code 200 , 404 etc.
**Content-Type:** El tipo de contenido de respuesta que vamos a enviarle al cliente. 'text/plain', 'application/text' , etc.
**headers:** Podemos especificarle el tipo de contenido y el codigo de respuesta.
