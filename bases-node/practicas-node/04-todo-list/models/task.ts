const { v4: uuidv4 } = require('uuid');


export class Task {
    public id: string = '';
    public completedDate: string | null = null
    public description: string = '';

    constructor(
        description: string
    ) {
        // Al hacer mi nueva instancia los valores pasados por argumento se guardaran en las propiedades de la instancia de mi clase.
        this.id = uuidv4();
        this.description = description;
        this.completedDate = null;
    }

}


