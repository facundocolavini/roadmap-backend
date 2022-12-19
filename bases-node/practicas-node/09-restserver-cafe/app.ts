/* Importaciones de terceros */
require('dotenv').config();

/* Importaciones Propias o locales */
const { Server } = require('./models/server');


/* Importaciones de variables */


const server = new Server();


server.listen()