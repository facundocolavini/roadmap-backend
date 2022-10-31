import fs from 'fs'
import { parse } from 'path';
import { Task } from '../interfaces/tasks';

const file = './db/data.json';

export const saveInDB = <T>(data: Array<T>) => {
    // La data se debe pasar a string para guardarse sino sera un error de arraybuffer

    fs.writeFileSync(file, JSON.stringify(data))
}

export const readInDB = () => {
    if (!fs.existsSync(file)) { // Si mi db existe
        return null;
    }

    const dataString = fs.readFileSync(file, { encoding: 'utf-8' })//Encoding para que no me regrese los bytes
    // Parsea de string a mi array 
    const dataArray: Array<Task> = JSON.parse(dataString);

    return dataArray;
}


module.exports = {
    saveInDB,
    readInDB
}