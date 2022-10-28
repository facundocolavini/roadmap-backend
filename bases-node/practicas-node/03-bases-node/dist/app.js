"use strict";
const { crearArchivoTablas } = require('./helpers/multiplicar');
const { yargs } = require('./config/yargs');
const colors = require("./config/colors");
// Argumentos y path donde se ejecuta mi aplicacion de node
// console.log(process.argv)
//process.argv
// const [, , arg3 = 'base=5'] = process.argv
// const [, nrbase = 5] = arg3.split('=')
// console.log(nrbase)
//Yargs 
//console.log(process.argv); // node
//console.log(argv); // yargs
console.clear();
crearArchivoTablas(yargs.b, yargs.l)
    .then((fileName) => {
    console.log(colors.info(`${fileName} | Archivo creado con exito!`));
})
    .catch((error) => {
    console.log(colors.col.error(error));
});
// Crear archivo con writeFile
// fs.writeFile(`tabla-${base}.txt`,salida,(err:string)=>{
//     if(err) throw err
//     console.log('El archivo se creo con exito!')
// })
