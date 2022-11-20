/* Importaciones de terceros */
require('dotenv').config();

/* Importaciones Propias o locales */
import { Server } from "./models/server";

/* Importaciones de variables */


const server = new Server();


server.listen()