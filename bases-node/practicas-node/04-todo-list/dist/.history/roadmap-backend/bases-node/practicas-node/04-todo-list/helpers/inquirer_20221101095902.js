"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmAction = exports.showCheckList = exports.listDeleteTasks = exports.readInput = exports.pause = exports.inquirerMenu = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const colors_1 = __importDefault(require("../config/colors"));
const questionsMenu = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${colors_1.default.green('1.')} Crear Tarea`
            },
            {
                value: '2',
                name: `${colors_1.default.green('2.')} Listar Tareas`
            },
            {
                value: '3',
                name: `${colors_1.default.green('3.')} Listar Tareas Completadas`
            },
            {
                value: '4',
                name: `${colors_1.default.green('4.')} Listar Tareas Pendientes`
            },
            {
                value: '5',
                name: `${colors_1.default.green('5.')} Completar Tarea(s)`
            },
            {
                value: '6',
                name: `${colors_1.default.green('6.')} Borrar Tarea`
            },
            {
                value: '0',
                name: `${colors_1.default.green('0.')} Salir`
            },
        ]
    }
];
const questionPauseMenu = [
    {
        type: 'input',
        name: 'enter',
        message: `Presione ${colors_1.default.warn('ENTER')} para continuar\n`,
    }
];
const inquirerMenu = async () => {
    console.clear();
    console.log(colors_1.default.green('=========================='));
    console.log(colors_1.default.white('  Seleccione una opción'));
    console.log(colors_1.default.green('==========================\n'));
    const { opcion } = await inquirer_1.default.prompt(questionsMenu);
    return opcion;
};
exports.inquirerMenu = inquirerMenu;
const pause = async () => {
    console.log('\n');
    await inquirer_1.default.prompt(questionPauseMenu);
};
exports.pause = pause;
const readInput = async (msg) => {
    const question = [
        {
            type: 'input',
            name: 'description',
            message: msg,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor';
                }
                return true; // paso la validacion
            }
        }
    ];
    const { description } = await inquirer_1.default.prompt(question);
    return description;
};
exports.readInput = readInput;
// Menu de tareas a eliminar devuelve el id 
const listDeleteTasks = async (tasksArr) => {
    const choices = tasksArr.map((task, i) => {
        const idx = i + 1;
        return {
            value: task.id,
            name: `${colors_1.default.green(idx + '.')} ${task.description}`
        };
    });
    //Añado al final de mi array
    choices.unshift({
        value: '0',
        name: `${colors_1.default.green('0.')} Cancelar`
    });
    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices: choices
        }
    ];
    const { id } = await inquirer_1.default.prompt(questions);
    return id;
};
exports.listDeleteTasks = listDeleteTasks;
const showCheckList = async (tasksArr) => {
    const choices = tasksArr.map((task, i) => {
        const idx = i + 1;
        return {
            value: task.id,
            name: `${colors_1.default.green(idx + '.')} ${task.description}`,
            checked: true,
        };
    });
    //Añado al final de mi array
    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices: choices
        }
    ];
    const { id } = await inquirer_1.default.prompt(questions);
    return id;
};
exports.showCheckList = showCheckList;
const confirmAction = async (message) => {
    const questions = [
        {
            type: 'confirm',
            name: 'ok',
            message: message,
        }
    ];
    const { ok } = await inquirer_1.default.prompt(questions);
    return ok;
};
exports.confirmAction = confirmAction;
module.exports = {
    inquirerMenu: exports.inquirerMenu,
    pause: exports.pause,
    readInput: exports.readInput,
    listDeleteTasks: exports.listDeleteTasks,
    confirmAction: exports.confirmAction
};
