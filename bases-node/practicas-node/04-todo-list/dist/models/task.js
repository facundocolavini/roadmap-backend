"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const { v4: uuidv4 } = require('uuid');
class Task {
    id = '';
    completedDate = null;
    description = '';
    constructor(description) {
        // Al hacer mi nueva instancia los valores pasados por argumento se guardaran en las propiedades de la instancia de mi clase.
        this.id = uuidv4();
        this.description = description;
        this.completedDate = null;
    }
}
exports.Task = Task;
