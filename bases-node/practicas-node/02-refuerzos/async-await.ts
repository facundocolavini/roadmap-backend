import { empleados, salarios } from "./constants";

export const getEmpleadoSimplificado = (id:number):Promise<string> =>{ // Ya no utilizamos callbacks en mis argumentos
    const empleado: string | undefined = empleados.find(e => id === e.id)?.nombre
    return new Promise((resolve, reject) =>{
        (empleado) 
            ? resolve(empleado)
            : reject(`Empleado con id  ${id} no existe`);
    })
}

export const getSalarioSimplificado = <T>(id:number):Promise<number| string> =>{ // Ya no utilizamos callbacks en mis argumentos
    const salario: number | undefined = salarios.find(s => id === s.id)?.salario
    return new Promise((resolve, reject) =>{
        (salario) 
            ? resolve(salario)
            : reject(`No existe salario para el empleado con el id: ${id}`);
    })
}

const getInfoUser = async (id:number) =>{
    try{ 
        const empleado =  await getEmpleadoSimplificado(id)
        const salario =  await getSalarioSimplificado(id)
    
        return `El salario del empleado ${empleado} es de ${salario}`;
    }catch(error){
        throw error;
    }

}



getInfoUser(1)
    .then((user) => {
        console.log('TODO BIEN')
        console.log(user)
    })
    .catch(err => {
        console.log('TODO BIEN')
        console.log(err)
    })

