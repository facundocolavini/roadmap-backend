import colors from '../config/colors';
import { listTasksConsole } from '../helpers';
import { formatTodayDate } from '../helpers/formatDate';
import { TaskList, Task as TaskInt } from '../interfaces/tasks';
import { Task } from './task';
const { v4: uuidv4 } = require('uuid');


export class Tasks {
    public tasksList: TaskList;


    constructor() {
        this.tasksList = {}
    }

    deleteTask(id:string =''){
        if(this.tasksList[id]){
            delete this.tasksList[id]
        }
    }
    //Getters and Setters

    //Paso de un objeto a un array para mostrar mis tareas
    get listTasksArr() { // retorna un nuevo array de mi listado de tareas
        const listTasksArr: TaskInt[] = []
        // array de id de mis tareas
        const arrayIds: string[] = Object.keys(this.tasksList) // extrae todas  las llaves y las pasa a un arreglo ["id","id2"]
        // Recorro mi arrays de ids
        arrayIds.forEach(taskIdKey => {
            // Insertar las tareas de mi array de ids a mi listTaskArr
            const task = this.tasksList[taskIdKey]  // tarea actual en mi bucle
            listTasksArr.push(task) // inserto la tarea actual 

        })
        return listTasksArr;
    }


    //Methods
    createTask(description: string = '') {
        const task = new Task(description) // Crea esa tarea con su id y descp y fecha 
        this.tasksList[task.id] = task; // la almacena en el objeto de listado de tareas
    }

    // Lee las tareas de un Array de tareas y las pasa a mi object de tareas
    readTasks(arrTasks: Array<Task> = []) {
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

        arrTasks.forEach((task: TaskInt) => {
            this.tasksList[task.id] = task;
        })

    }

    listAllTasks() {
        // Como lo hice yo:
        // listTasksConsole(this.tasksList)

        // Como lo hizo fernando:
        console.log('\n');
        this.listTasksArr.map((task, i) => {
            const idx = `${colors.green(`${i + 1}.`)}`;
            const { description, completedDate } = task;
            const state = (completedDate) ? `${colors.green('Completado')}` : `${colors.error('Pendiente')}`;
            console.log(`${idx} ${description} :: ${state}`);
        })

    }

    listPendingAndCompletedTasks(completed: boolean = true) {

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
                ? `${colors.green('Completado')}`
                : `${colors.error('Pendiente')}`;

            if (completed) {
                if (completedDate) {
                    contador += 1;
                    console.log(`${colors.green(contador.toString() + '.')} ${description} :: ${completedDate}`)
                }
            } else {
                if (!completedDate) {
                    contador += 1;
                    console.log(`${colors.green(contador.toString() + '.')} ${description} :: ${state}`)
                }
            }

        })
    }
    
    toggleCompleteTask(ids:string[] = []){
        ids.forEach(id =>{
            const task = this.tasksList[id];
           
            if(!task.completedDate){
                task.completedDate = `${colors.green(formatTodayDate())}`
            }
        })

        this.listTasksArr.map(task =>{
            if(!ids.includes(task.id)){// Filtra las tareas de completadas a pendientes
                this.tasksList[task.id];
                task.completedDate = null;
            }
        })
    }
}



module.exports = { Tasks };