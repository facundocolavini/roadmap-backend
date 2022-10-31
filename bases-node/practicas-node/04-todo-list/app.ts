import { inquirerMenu, pause, readInput, saveInDB, readInDB } from './helpers'
import { Tasks } from './models';
import { Task as TaskInt } from './interfaces/tasks';


const main = async () => {
    let opt = '';
    const tasks = new Tasks();

    // Leer DB
    const tasksInDB = readInDB();

    if (tasksInDB) { // Chequea que existan las tareas
        //Establece las tareas
        tasks.readTasks(tasksInDB);
    }

    do {
        // Imprimir el menu 
        opt = await inquirerMenu();
        // console.log({ opt });


        switch (opt) {
            case '1':
                //crear
                const description = await readInput('Descripción: ');
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
        saveInDB(tasks.listTasksArr);

        await pause();

    } while (opt !== '0');
}

main(); 