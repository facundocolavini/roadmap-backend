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

## Servir contenido estatico

Express puede servir nuestras vistas.

Al pasar por la ruta resive nuestra pagina ya sea una home page o landing page.
Queremos mostrar un contenido estatico.
A esta carpeta se la denomina como public por que es contenido publico que cualquiera que sepa el url va a poder ver.

Para que mi carpeta public sea visible hay que ejecutar un middleware que se ejecuta antes de hacer algo.El cual va a servir el contenido estatico.
**Importante:** En nuestra carpeta public debe de haber un index.html para que express pueda servirlo como indice de nuestra aplicacion o inicio de nuestra aplicaccion.

Middleware : Funcion que se ejecuta antes de hacer algo.

```js
app.use(express.static('public')); // Va a contener la ruta donde se encuentre mi carpeta public
```

**path absoluto:** Para construir este tipo de path utilizamos el \_dirname, el dirname es donde esta corriendo o instalada la app y despues agregamos la ruta que necesitemos ir.

```js
//Path Absoluto
res.sendFile(__dirname + '/public/404.html');
```

**path relativo:** Es un path relativo donde nos encontramos actualmente posicionados ejemplo si estamos en css

```html
<link rel="stylesheet" href="./css/style.css" />
```

## Template Engine

Sirve para darle dinamismos a nuestro sitios web para renderizar la app del lado del backend.
Si realizasmos algo mas grande es recomendable hacer una web app con un framework

### Handlebars

Se utiliza cuando necesitamos hacer cosas sencillas.
Es un motor de plantilla para cambiar nuestro sitios web.Es una extension de un template engine llamado mustache.

configurar hbs en nuestro proytecto:
https://github.com/pillarjs/hbs

```
npm i hbs
```

Vistas pre renderizadas en nuestro backend.Para eso le tenemos que decir a express que nos sette el engine de hbs.

**views:**Carpeta donde handlebars va a buscar nuestras vistas y partials.

- Ventajas de HBS :
  - Reutilizar ciertos bloques de codigos (NAVBAR, FOOOTER)
  - Mandar argumentos desde mi controller y renderizarlos en mi html.

## Preparar nuestro webserver para subirlo a un hosting

Saber en que puerto corre la app :
Para esto podemos configurar una variable de entorno para crear una variable con el PORT de nuestra aplicacion.

Especificar en mi package.json cual es el script con que comando se va a levantar la app cuando este lista

El port tiene que estar en la variabla de entorno podemos setear el ambiente con el que vamos a trabajar haciendo una bandera en mis script de mi package diciendo si vamos a estar
en dev , test , prod.

```js

{
  scripts: "start": node app.ts --dev
}

```
