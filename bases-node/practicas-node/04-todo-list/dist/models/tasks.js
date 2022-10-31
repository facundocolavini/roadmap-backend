"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tasks = void 0;
const colors_1 = __importDefault(require("../config/colors"));
const task_1 = require("./task");
const { v4: uuidv4 } = require('uuid');
class Tasks {
    tasksList;
    constructor() {
        this.tasksList = {};
    }
    //Getters and Setters
    //Paso de un objeto a un array para mostrar mis tareas
    get listTasksArr() {
        const listTasksArr = [];
        // array de id de mis tareas
        const arrayIds = Object.keys(this.tasksList); // extrae todas  las llaves y las pasa a un arreglo ["id","id2"]
        // Recorro mi arrays de ids
        arrayIds.forEach(taskIdKey => {
            // Insertar las tareas de mi array de ids a mi listTaskArr
            const task = this.tasksList[taskIdKey]; // tarea actual en mi bucle
            listTasksArr.push(task); // inserto la tarea actual 
        });
        return listTasksArr;
    }
    //Methods
    createTask(description = '') {
        const task = new task_1.Task(description); // Crea esa tarea con su id y descp y fecha 
        this.tasksList[task.id] = task; // la almacena en el objeto de listado de tareas
    }
    // Lee las tareas de un Array de tareas y las pasa a mi object de tareas
    readTasks(arrTasks = []) {
        // if (!arrTasks) {
        //     throw new Error("No hay tareas en la DB");
        // }
        // arrTasks.map((task: Task) => {
        //     this.tasksList = {
        //         ...this.tasksList, // Todas las tareas anteriores
        //         [task.id]: task,
        //     }
        // })
        // console.log(`Tareas en DB:\n`)
        // console.log(this.tasksList)
        //Forma de fernando 
        arrTasks.forEach((task) => {
            this.tasksList[task.id] = task;
        });
    }
    listAllTasks() {
        // Como lo hice yo:
        // listTasksConsole(this.tasksList)
        // Como lo hizo fernando:
        console.log('\n');
        this.listTasksArr.map((task, i) => {
            const idx = `${colors_1.default.green(`${i + 1}.`)}`;
            const { description, completedDate } = task;
            const state = (completedDate) ? `${colors_1.default.green('Completado')}` : `${colors_1.default.error('Pendiente')}`;
            console.log(`${idx} ${description} :: ${state}`);
        });
    }
    listPendingAndCompletedTasks(completed = true) {
        // False = pendientes
        // True  = Completadas
        // Mi forma de hacerlo
        // this.listTasksArr.filter((task, i) => {
        //     const idx = `${colors.green(`${i + 1}.`)}`;
        //     const { description, completedDate } = task;
        //     const state = (completedDate) ? `${colors.green('Completado')}` : `${colors.error('Pendiente')}`;
        //     (!!task.completedDate && completed) && console.log(`${idx} ${description} :: ${state}`);
        //     (!task.completedDate && !completed) && console.log(`${idx} ${description} :: ${state}`);
        // })
        // Como lo hizo fernando:
        console.log('\n');
        let contador = 0;
        this.listTasksArr.map((task) => {
            const { description, completedDate } = task;
            const state = (completedDate)
                ? `${colors_1.default.green('Completado')}`
                : `${colors_1.default.error('Pendiente')}`;
            if (completed) {
                if (completedDate) {
                    contador += 1;
                    console.log(`${colors_1.default.green(contador.toString() + '.')} ${description} :: ${completedDate}`);
                }
            }
            else {
                if (!completedDate) {
                    contador += 1;
                    console.log(`${colors_1.default.green(contador.toString() + '.')} ${description} :: ${state}`);
                }
            }
        });
    }
}
exports.Tasks = Tasks;
module.exports = { Tasks };
