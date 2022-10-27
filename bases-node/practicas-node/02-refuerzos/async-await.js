"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSalarioSimplificado = exports.getEmpleadoSimplificado = void 0;
const constants_1 = require("./constants");
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
const getInfoUser = async (id) => {
    try {
        const empleado = await (0, exports.getEmpleadoSimplificado)(id);
        const salario = await (0, exports.getSalarioSimplificado)(id);
        return `El salario del empleado ${empleado} es de ${salario}`;
    }
    catch (error) {
        throw error;
    }
};
getInfoUser(1)
    .then((user) => {
    console.log('TODO BIEN');
    console.log(user);
})
    .catch(err => {
    console.log('TODO BIEN');
    console.log(err);
});
//# sourceMappingURL=async-await.js.map