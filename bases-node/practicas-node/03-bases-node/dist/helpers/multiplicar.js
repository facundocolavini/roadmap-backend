"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearArchivoTablas = exports.createFile = void 0;
const fs = require('fs');
const colors = require("../config/colors");
/*
    Tarea:Vamos a imprimir y grabar la tabla de multiplicar en un archivo de texto en la misma direccion de mi aplicacion.
*/
//Con promesa
const createFile = (file, base) => {
    const fsFile = fs.writeFileSync(`tabla-${base}.txt`, file);
    // console.log(fsFile, 'que es');
    return new Promise((resolve, reject) => {
        (fsFile === undefined)
            ? resolve(fsFile)
            : reject(`El archivo tubo un error al querer crearse`);
    });
};
exports.createFile = createFile;
// Con async - await
const crearArchivoTablas = async (base = 5, list = false) => {
    try {
        let salida = '';
        for (let i = 1; i <= 10; i++) {
            salida += `${colors.verbose(base)} ${colors.verbose('X')} ${colors.verbose(i)} = ${colors.info(i * base)}\n`;
        }
        // Show list
        if (list) {
            console.log(colors.green('===================='));
            console.log(colors.blue('   TABLA DEL'), colors.blue(base));
            console.log(colors.green('===================='));
            console.log(salida);
        }
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        //await createFile(salida,base)
        return `tabla-${base}.txt`;
    }
    catch (error) {
        throw error;
    }
};
exports.crearArchivoTablas = crearArchivoTablas;
module.exports = {
    crearArchivoTablas: exports.crearArchivoTablas
};
