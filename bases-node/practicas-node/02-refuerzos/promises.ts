
import { empleados, salarios } from "./constants";
import { Empleado, Salario } from "./interfaces";



const getEmpleado = (id: number) => { // Ya no utilizamos callbacks en mis argumentos
    const empleado = empleados.find(e => id === e.id)?.nombre
    const promesa = new Promise((resolve, reject) => {
        if (empleado) {
            resolve(empleado);
        } else {
            reject(`Empleado con id  ${id} no existe`);
        }
    })

    return promesa;
}

// Forma simplificada   
export const getEmpleadoSimplificado = (id: number): Promise<string> => { // Ya no utilizamos callbacks en mis argumentos
    const empleado: string | undefined = empleados.find(e => id === e.id)?.nombre
    return new Promise((resolve, reject) => {
        (empleado)
            ? resolve(empleado)
            : reject(`Empleado con id  ${id} no existe`);
    })
}

export const getSalarioSimplificado = <T>(id: number): Promise<number | string> => { // Ya no utilizamos callbacks en mis argumentos
    const salario: number | undefined = salarios.find(s => id === s.id)?.salario
    return new Promise((resolve, reject) => {
        (salario)
            ? resolve(salario)
            : reject(`No existe salario para el empleado con el id: ${id}`);
    })
}

getEmpleadoSimplificado(4)
    .then((e) => { console.log(e) })
    .catch((error) => { console.log(error) })


getSalarioSimplificado(1)
    .then((s) => { console.log(s) })
    .catch((error: string) => { console.log(error) })


//ERROR ASI NO: Promise Hell Obtener el salario de un empleado (Promesas anidadas)
getEmpleadoSimplificado(1)
    .then(empleado => {
        getSalarioSimplificado(41)
            .then((salario) => { console.log(`El empleado: ${empleado} tiene un salario: ${salario}`) })
            .catch((err) => { console.log(err) })
    })
    .catch((err) => { console.log(err) })


// Podemos solucionar de varias formas el Promise Hell una es devolviendo la promesa resuelta 
let nombre: string;
let id = 2;
getEmpleadoSimplificado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalarioSimplificado(id)
    })
    .then(salario => console.log(`El empleado: ${nombre} tiene un salario: ${salario}`))
    .catch(err => console.log(err)) // Me da los errores de las promesas que tengan un error
