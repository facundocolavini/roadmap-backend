"use strict";
const { v4: uuidv4 } = require('uuid');
class Task {
    id;
    description;
    completedDate;
    constructor(id = '', description = '', completedDate = null) {
        this.id = id;
        this.description = description;
        this.completedDate = completedDate;
        // Al hacer mi nueva instancia los valores pasados por argumento se guardaran en las propiedades de la instancia de mi clase.
        this.id = uuidv4();
        this.description = description;
        this.completedDate = null;
    }
}
module.exports = Task;
