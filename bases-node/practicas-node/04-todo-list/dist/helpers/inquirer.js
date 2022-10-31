"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readInput = exports.pause = exports.inquirerMenu = void 0;
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
module.exports = {
    inquirerMenu: exports.inquirerMenu,
    pause: exports.pause,
    readInput: exports.readInput
};
