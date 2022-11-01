import inquirer from 'inquirer';
import colors from '../config/colors';
import { Task } from '../interfaces/tasks';

interface menuItem {
    type: string;
    name: string;
    message?: string;
    choices?: Array<{
        value: string,
        name: string,
        checked?:boolean
    }>
}

const questionsMenu: menuItem[] = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${colors.green('1.')} Crear Tarea`
            },
            {
                value: '2',
                name: `${colors.green('2.')} Listar Tareas`
            },
            {
                value: '3',
                name: `${colors.green('3.')} Listar Tareas Completadas`
            },
            {
                value: '4',
                name: `${colors.green('4.')} Listar Tareas Pendientes`
            },
            {
                value: '5',
                name: `${colors.green('5.')} Completar Tarea(s)`
            },
            {
                value: '6',
                name: `${colors.green('6.')} Borrar Tarea`
            },
            {
                value: '0',
                name: `${colors.green('0.')} Salir`
            },

        ]
    }
]

const questionPauseMenu: menuItem[] = [
    {
        type: 'input',
        name: 'enter',
        message: `Presione ${colors.warn('ENTER')} para continuar\n`,
    }
]

export const inquirerMenu = async () => {
    console.clear();
    console.log(colors.green('=========================='));
    console.log(colors.white('  Seleccione una opción'));
    console.log(colors.green('==========================\n'));

    const { opcion } = await inquirer.prompt(questionsMenu);

    return opcion;

}
export const pause = async () => {
    console.log('\n');
    await inquirer.prompt(questionPauseMenu);
}

export const readInput = async (msg: string): Promise<string> => {
    const question = [
        {
            type: 'input',
            name: 'description',
            message: msg,
            validate(value: string) {
                if (value.length === 0) {

                    return 'Por favor ingrese un valor';
                }
                return true // paso la validacion
            }
        }
    ]
    

    const { description } = await inquirer.prompt(question);

    return description;
}

// Menu de tareas a eliminar devuelve el id 
export const listDeleteTasks = async(tasksArr: Task[]) => {
    const choices = tasksArr.map((task,i) => {
        const idx:number = i + 1;
        return {
            value: task.id,
            name: `${colors.green(idx + '.')} ${task.description}`
        }
    })

    //Añado al final de mi array
    choices.unshift({
        value: '0',
        name:  `${colors.green('0.')} Cancelar`
    })

    const questions:menuItem[] = [
        { 
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices:choices
        }
    ];
    const { id } = await inquirer.prompt(questions);
 
    return id;
}

export const showCheckList = async(tasksArr: Task[]) => {
    const choices = tasksArr.map((task,i) => {
        const idx:number = i + 1;
        return {
            value: task.id,
            name: `${colors.green(idx + '.')} ${task.description}`,
            checked: (task.completedDate ? true : false),
        }
    })


    const questions:menuItem[] = [
        { 
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices:choices
        }
    ];
    const { ids } = await inquirer.prompt(questions);
 
    return ids;
}

export const confirmAction = async (message:string): Promise<boolean> => {

    const questions:menuItem[] = [
        { 
            type: 'confirm',
            name: 'ok',
            message: message,
        }
    ];

    const { ok } = await inquirer.prompt(questions);

    return ok
}

module.exports = {
    inquirerMenu,
    pause,
    readInput,
    listDeleteTasks,
    confirmAction,
    showCheckList
}