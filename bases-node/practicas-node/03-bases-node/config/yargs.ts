interface Argv {
    _: Array<any>;
    b: number;
    l: boolean;
    u: number;
    base: number;
    '$0': string;
}
/* 
Tarea: Hacer una opcion l en mi lista de comandos que lo que va a realizar es listar.
l: va a listar el console.log de mi tabla si esta en true sino no ponemos la salida

    key: l
    alias: list
    type: boolean,
    demandOption: true,
    default: false


Tarea: Realizar una nueva opcio until que reciba un numero y diga hasta que cantidad de registros va a mostrar de mi tabla.

*/




export const yargs = require('yargs')(process.argv.slice(2))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        default: 5,
        describe: 'Create my list table with specific base'
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'show my list table'
    })
    .option('u', {
        alias: 'until',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: 'Show up to a certain amount of records'
    })
    .check((argv: Argv, options: object) => { // Validaciones de mi comandos 
        if (isNaN(argv?.b)) {
            throw 'La base tiene que ser un numero'
        }
        else if (isNaN(argv?.u)) {
            throw 'El limite ingresado debe ser un numero'
        }
        else if (typeof argv.l !== 'boolean') {
            throw 'Debe de ser un booleano'
        }
        return true // si no hay errores ejecuta el comando
    })
    .argv;



module.exports = {
    yargs
}