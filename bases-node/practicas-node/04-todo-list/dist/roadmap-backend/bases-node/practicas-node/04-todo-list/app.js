"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
const models_1 = require("./models");
const colors_1 = __importDefault(require("./config/colors"));
const inquirer_20221101095902_1 = require("../../../../.history/roadmap-backend/bases-node/practicas-node/04-todo-list/helpers/inquirer_20221101095902");
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
            case '5':
                //Check list completado o pendiente
                const { ids } = await (0, inquirer_20221101095902_1.showCheckList)(tasks.listTasksArr);
                console.log(ids);
                break;
            case '6':
                // borrar tareas
                const id = await (0, helpers_1.listDeleteTasks)(tasks.listTasksArr);
                if (id !== '0') {
                    const ok = await (0, helpers_1.confirmAction)('¿Estas seguro que desea borrarla?');
                    if (ok) {
                        tasks.deleteTask(id);
                        console.log(colors_1.default.green('\nTarea Eliminada\n'));
                    }
                }
                break;
        }
        // guardar data en db
        (0, helpers_1.saveInDB)(tasks.listTasksArr);
        await (0, helpers_1.pause)();
    } while (opt !== '0');
};
main();
