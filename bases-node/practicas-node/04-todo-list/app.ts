import colors from './config/colors';
import { confirmAction, inquirerMenu, listDeleteTasks, pause, readInDB, readInput, saveInDB, showCheckList } from './helpers';
import { Tasks } from './models';


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
            
                case '5':
                    //Check list completado o pendiente
                    const ids  = await showCheckList(tasks.listTasksArr)
                    tasks.toggleCompleteTask(ids);
                    break;
            case '6':
                // borrar tareas
                const id = await listDeleteTasks(tasks.listTasksArr)
                if( id !== '0' ){
                    const ok = await confirmAction('¿Estas seguro que desea borrarla?')
                    if(ok) {
                        tasks.deleteTask(id);
                        console.log(colors.green('\nTarea Eliminada\n'));
                    }
                    
                }

                break;
        }

        // guardar data en db
        saveInDB(tasks.listTasksArr);

        await pause();

    } while (opt !== '0');
}

main(); 