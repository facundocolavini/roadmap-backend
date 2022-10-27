import { empleados } from "./constants/empleados";
import { salarios } from "./constants/salarios";
import { Empleado } from "./interfaces/empleados";
import { Salario } from "./interfaces/salarios";





export const getEmpleado = (id:number, callback: Function) =>{
    const empleado = empleados.find(e => id === e.id)?.nombre

    if( empleado ){
        callback(null ,empleado);
    }else {
        return `Empleado con id  ${id} no existe`;
    }
}

// console.log(getEmpleado(1))


getEmpleado(1, (err:string, empleado: Empleado )=>{
    if(err){
        console.log('ERROR');
        return console.log(err)
    }

    console.log('Empleado Existe!');
    console.log(empleado);
})


let id: number = 3;

export const getSalario = ( id: number, callback: Function ) =>{ 
    const salario = salarios.find(s => s.id === id)?.salario

    if (salario){
        callback(null,salario) // Si no hay errores le ponemos el null
    }else {
        callback(`No existe salario para el empleado con el id: ${id}`);
    }
}


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
getEmpleado(id, (err:string, empleado: Empleado )=>{
    if(err){
        console.log('ERROR');
        return console.log(err)
    }

    getSalario(id, (err: string,salario: Salario)=>{
        if(err){
            console.log('ERROR SALARIO!')
            console.log(err)
        }else {
            console.log(`El empleado: ${empleado} tiene un salario de ${salario}`)
        }
    })
})

