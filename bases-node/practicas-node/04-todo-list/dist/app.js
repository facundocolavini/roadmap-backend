"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
const models_1 = require("./models");
const main = async () => {
    let opt = '';
    const tasks = new models_1.Tasks();
    // Leer DB
    const tasksInDB = (0, helpers_1.readInDB)();
    if (tasksInDB) { // Chequea que existan las tareas
        //Establece las tareas
        tasks.readTasks(tasksInDB);
    }
    do {
        // Imprimir el menu 
        opt = await (0, helpers_1.inquirerMenu)();
        // console.log({ opt });
        switch (opt) {
            case '1':
                //crear
                const description = await (0, helpers_1.readInput)('Descripción: ');
                tasks.createTask(description);
                break;
            case '2':
                // listar tareas
                tasks.listAllTasks();
                break;
            case '3':
                // listar tareas completadas
                tasks.listPendingAndCompletedTasks();
                break;
            case '4':
                // listar tareas pendientes
                tasks.listPendingAndCompletedTasks(false);
                break;
        }
        // guardar data en db
        (0, helpers_1.saveInDB)(tasks.listTasksArr);
        await (0, helpers_1.pause)();
    } while (opt !== '0');
};
main();
