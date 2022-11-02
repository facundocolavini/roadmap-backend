import inquirer from 'inquirer';
import colors from '../config/colors';
import { City } from '../interfaces/city';

interface Choices {
    value: number | string,
    name: string,
    checked?: boolean
}

interface menuItem {
    type: string;
    name: string;
    message?: string;
    choices?: Choices[];
}

const questionsMenu: menuItem[] = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: 1,
                name: `${colors.green('1.')} Buscar lugar`
            },
            {
                value: 2,
                name: `${colors.green('2.')} Historial de busqueda`
            },
            {
                value: 0,
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

//Listado de Ciudades 
export const listCitys = async (cityArr: City[]): Promise<string> => {
    const choices: Choices[] = cityArr.map((city, i) => {
        const idx: number = i + 1;
        return {
            value: city.id, // no puedo unsar el place.id por que es de tipo string y romperia con mi interface choices
            name: `${colors.green(idx + '.')} ${city.name}`
        }
    })

    //Añado al final de mi array
    choices.unshift({
        value: 0,
        name: `${colors.green('0.')} Cancelar`
    })

    const questions: menuItem[] = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccione lugar:',
            choices: choices
        }
    ];
    const { id } = await inquirer.prompt(questions);

    return id;
}
/* 
// Menu de tareas a eliminar devuelve el id 


export const showCheckList = async(tasksArr: Task[]) => {
    const choices = tasksArr.map((task,i) => {
        const idx:number = i + 1;
        return {
            value: parseInt(task.id),
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
} */

export const confirmAction = async (message: string): Promise<boolean> => {

    const questions: menuItem[] = [
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
    confirmAction,
    listCitys

}