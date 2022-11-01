import { TaskList } from '../interfaces/tasks';
const colors = require('../config/colors')

export const showMenu = (): Promise<string> => {

    return new Promise(resolve => {
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

        readLine.question('Seleccione una opción: ', (opt: string) => {
            readLine.close();// Cierra la ejecuccio asi no se queda esperando que el usuario ingrese informacion
            resolve(opt);
        });
    })

}

// Detiene la aplicacion
const pause = () => {
    return new Promise((resolve) => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question(`\nPresione ${colors.warn('ENTER')} para continuar\n`, (opt: string) => {
            readLine.close();// Cierra la ejecuccio asi no se queda esperando que el usuario ingrese informacion
            resolve(true);

        })
    })
}

export const listTasksConsole = (objTasks: TaskList) => {
    let index: number = 1;
    for (const taskIdKey in objTasks) {
        const task = objTasks[taskIdKey]
        // console.log(task);
        // 1. Descp :: Completada | Pendiente
        if (task.completedDate !== null) {
            console.log(`${colors.green(index + '.')} ${task.description} :: ${colors.green('Completada')}`)
        } else {
            console.log(`${colors.green(index + '.')} ${task.description} :: ${colors.error('Pendiente')}`)
        }
        index++;

    }
    console.log(`\n`);
}

module.exports = {
    showMenu,
    pause,
    listTasksConsole
}