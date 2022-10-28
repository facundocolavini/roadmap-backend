"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yargs = void 0;
/*
Tarea: Hacer una opcion l en mi lista de comandos que lo que va a realizar es listar.
l: va a listar el console.log de mi tabla si esta en true sino no ponemos la salida

    key: l
    alias: list
    type: boolean,
    demandOption: true,
    default: false

*/
exports.yargs = require('yargs')(process.argv.slice(2))
    .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    default: 5,
    describe: 'create my list table with specific base'
})
    .option('l', {
    alias: 'list',
    type: 'boolean',
    default: false,
    describe: 'show my list table'
})
    .check((argv, options) => {
    if (isNaN(argv?.b)) {
        throw 'La base tiene que ser un numero';
    }
    else if (typeof argv.l !== 'boolean') {
        throw 'Debe de ser un booleano';
    }
    return true; // si no hay errores ejecuta el comando
})
    .argv;
module.exports = {
    yargs: exports.yargs
};
