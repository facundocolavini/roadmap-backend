"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showMenu = void 0;
const colors = require('../config/colors');
const showMenu = () => {
    console.clear();
    console.log(colors.green('=========================='));
    console.log(colors.green('  Seleccione una opción'));
    console.log(colors.green('==========================\n'));
    console.log(`${colors.warn('1.')} Crear Tarea`);
    console.log(`${colors.warn('2.')} Listar Tareas`);
    console.log(`${colors.warn('3.')} Listar Tareas Completadas`);
    console.log(`${colors.warn('4.')} Listar Tarea Pendientes`);
    console.log(`${colors.warn('5.')} Completar Tarea(s)`);
    console.log(`${colors.warn('6.')} Borrar Tarea`);
    console.log(`${colors.warn('7.')} Salir \n`);
    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readLine.question('Seleccione una opción:', (response) => {
        readLine.close(); // Cierra la ejecuccio asi no se queda esperando que el usuario ingrese informacion
    });
};
exports.showMenu = showMenu;
// Detiene la aplicacion
const pause = () => {
    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readLine.question(`\nPresione ${colors.warn('ENTER')} para continuar\n`, (response) => {
        console.log({ response });
        readLine.close(); // Cierra la ejecuccio asi no se queda esperando que el usuario ingrese informacion
    });
};
module.exports = {
    showMenu: exports.showMenu,
    pause
};
