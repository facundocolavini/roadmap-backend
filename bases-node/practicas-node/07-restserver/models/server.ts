import express, { Response, Request } from 'express';
const cors = require('cors')
/* 
 Server Express With Class 

 Beneficios de hacerlo con class

- Podemos crear varias instancias de nuestro server de express 
- Podemos separar las rutas y el controlador de mi clase 
*/

export class Server {
    private app;
    public port;
    public usersPath: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        // API USERS Path
        this.usersPath = '/api/users';

        // Middlewares
        this.middlewares()

        // Routes
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use(cors())

        // Parseo la lectura del body  a json
        this.app.use(express.json())
        // Le dice a express donde esta mi carpeta public para que pueda utilizar su contenido public tanto css como html como cualquier cosa.
        this.app.use(express.static('public'))

    }

    routes() {
        // Separar las rutas y el controlador de la clase
        // User Routes Middlleware condicional
        this.app.use(this.usersPath, require('../routes/user'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`http://localhost:${this.port}`);
        })
    }
}
