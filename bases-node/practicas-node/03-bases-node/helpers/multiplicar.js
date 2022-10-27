"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearArchivoTablas = exports.createFile = void 0;
const fs = require('fs');
//Con promesa
const createFile = (file, base) => {
    const fsFile = fs.writeFileSync(`tabla-${base}.txt`, file);
    console.log(fsFile, 'que es');
    return new Promise((resolve, reject) => {
        (fsFile === undefined)
            ? resolve(fsFile)
            : reject(`El archivo tubo un error al querer crearse`);
    });
};
exports.createFile = createFile;
// Con async - await
const crearArchivoTablas = (base) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let salida = '';
        console.log('====================');
        console.log(`    TABLA DEL ${base}  `);
        console.log('====================');
        for (let i = 1; i <= 10; i++) {
            salida += `${base} X ${i} = ${i * base}\n`;
        }
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        //await createFile(salida,base)
        console.log(salida);
        return `tabla-${base}.txt`;
    }
    catch (error) {
        throw error;
    }
});
exports.crearArchivoTablas = crearArchivoTablas;
module.exports = {
    crearArchivoTablas: exports.crearArchivoTablas
};
