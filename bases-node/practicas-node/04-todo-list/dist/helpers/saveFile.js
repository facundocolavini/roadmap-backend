"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveInDB = void 0;
const fs_1 = __importDefault(require("fs"));
const saveInDB = (data) => {
    const file = './db/data.json';
    // La data se debe pasar a string para guardarse sino sera un error de arraybuffer
    fs_1.default.writeFileSync(file, JSON.stringify(data));
};
exports.saveInDB = saveInDB;
module.exports = {
    saveInDB: exports.saveInDB
};
