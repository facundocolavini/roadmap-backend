"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readInDB = exports.saveInDB = void 0;
const fs_1 = __importDefault(require("fs"));
const file = './db/data.json';
const saveInDB = (data) => {
    // La data se debe pasar a string para guardarse sino sera un error de arraybuffer
    fs_1.default.writeFileSync(file, JSON.stringify(data));
};
exports.saveInDB = saveInDB;
const readInDB = () => {
    if (!fs_1.default.existsSync(file)) { // Si mi db existe
        return null;
    }
    const dataString = fs_1.default.readFileSync(file, { encoding: 'utf-8' }); //Encoding para que no me regrese los bytes
    // Parsea de string a mi array 
    const dataArray = JSON.parse(dataString);
    return dataArray;
};
exports.readInDB = readInDB;
module.exports = {
    saveInDB: exports.saveInDB,
    readInDB: exports.readInDB
};
