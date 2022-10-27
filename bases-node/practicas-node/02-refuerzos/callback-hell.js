"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSalario = exports.getEmpleado = void 0;
const empleados_1 = require("./constants/empleados");
const salarios_1 = require("./constants/salarios");
const getEmpleado = (id, callback) => {
    const empleado = empleados_1.empleados.find(e => id === e.id)?.nombre;
    if (empleado) {
        callback(null, empleado);
    }
    else {
        return `Empleado con id  ${id} no existe`;
    }
};
exports.getEmpleado = getEmpleado;
// console.log(getEmpleado(1))
(0, exports.getEmpleado)(1, (err, empleado) => {
    if (err) {
        console.log('ERROR');
        return console.log(err);
    }
    console.log('Empleado Existe!');
    console.log(empleado);
});
let id = 3;
const getSalario = (id, callback) => {
    const salario = salarios_1.salarios.find(s => s.id === id)?.salario;
    if (salario) {
        callback(null, salario); // Si no hay errores le ponemos el null
    }
    else {
        callback(`No existe salario para el empleado con el id: ${id}`);
    }
};
exports.getSalario = getSalario;
// getSalario(id, (err: string,salario: Salario)=>{
//     if(err){
//         console.log('ERROR SALARIO!')
//         console.log(err)
//     }else {
//         console.log('El salario existe');
//         console.log(salario )
//     }
// })
// Callback Hell 
// Si necesito el empleado y el salario del empleado 
(0, exports.getEmpleado)(id, (err, empleado) => {
    if (err) {
        console.log('ERROR');
        return console.log(err);
    }
    (0, exports.getSalario)(id, (err, salario) => {
        if (err) {
            console.log('ERROR SALARIO!');
            console.log(err);
        }
        else {
            console.log(`El empleado: ${empleado} tiene un salario de ${salario}`);
        }
    });
});
//# sourceMappingURL=callback-hell.js.map