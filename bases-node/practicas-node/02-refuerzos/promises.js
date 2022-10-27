"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSalarioSimplificado = exports.getEmpleadoSimplificado = void 0;
const constants_1 = require("./constants");
const getEmpleado = (id) => {
    const empleado = constants_1.empleados.find(e => id === e.id)?.nombre;
    const promesa = new Promise((resolve, reject) => {
        if (empleado) {
            resolve(empleado);
        }
        else {
            reject(`Empleado con id  ${id} no existe`);
        }
    });
    return promesa;
};
// Forma simplificada   
const getEmpleadoSimplificado = (id) => {
    const empleado = constants_1.empleados.find(e => id === e.id)?.nombre;
    return new Promise((resolve, reject) => {
        (empleado)
            ? resolve(empleado)
            : reject(`Empleado con id  ${id} no existe`);
    });
};
exports.getEmpleadoSimplificado = getEmpleadoSimplificado;
const getSalarioSimplificado = (id) => {
    const salario = constants_1.salarios.find(s => id === s.id)?.salario;
    return new Promise((resolve, reject) => {
        (salario)
            ? resolve(salario)
            : reject(`No existe salario para el empleado con el id: ${id}`);
    });
};
exports.getSalarioSimplificado = getSalarioSimplificado;
(0, exports.getEmpleadoSimplificado)(4)
    .then((e) => { console.log(e); })
    .catch((error) => { console.log(error); });
(0, exports.getSalarioSimplificado)(1)
    .then((s) => { console.log(s); })
    .catch((error) => { console.log(error); });
//ERROR ASI NO: Promise Hell Obtener el salario de un empleado (Promesas anidadas)
(0, exports.getEmpleadoSimplificado)(1)
    .then(empleado => {
    (0, exports.getSalarioSimplificado)(41)
        .then((salario) => { console.log(`El empleado: ${empleado} tiene un salario: ${salario}`); })
        .catch((err) => { console.log(err); });
})
    .catch((err) => { console.log(err); });
// Podemos solucionar de varias formas el Promise Hell una es devolviendo la promesa resuelta 
let nombre;
let id = 2;
(0, exports.getEmpleadoSimplificado)(id)
    .then(empleado => {
    nombre = empleado;
    return (0, exports.getSalarioSimplificado)(id);
})
    .then(salario => console.log(`El empleado: ${nombre} tiene un salario: ${salario}`))
    .catch(err => console.log(err)); // Me da los errores de las promesas que tengan un error
//# sourceMappingURL=promises.js.map