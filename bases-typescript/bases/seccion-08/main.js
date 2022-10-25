"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutant {
        saveTheWorld() {
            return 'Mundo Salvado!';
        }
    }
    class Villian extends Mutant {
        domaintTheWorld() { return 'Mundo Conquistado!'; }
    }
    const wolwerine = new Xmen('Wolwerine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    // console.log(wolwerine,'Abstract')
    // console.log(magneto,'Abstract')
    // Metodos de clases abstracta 
    // console.log(wolwerine.saveTheWorld(),'Metodo Abstract')
    // console.log(magneto.domaintTheWorld(),'Abstract')
    const printName = (character) => {
        console.log(character.realName);
    };
    // printName(wolwerine)
    // printName(magneto)
})();
(() => {
    //Forma larga de declarar una clase
    class Avenger {
        constructor(name = '', team = '', realName, avgAge = 55) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            //Ejecuta este codigo al instanciar la clase
            Avenger.avgAge = avgAge;
        }
        static getAvAge() {
            return this.avgAge;
        }
        bio() {
            return `${this.name} ${this.team}`;
        }
    }
    const antman = new Avenger('Antman', 'Capitan'); // Sin la prop realName
    // console.log(antman);
    // console.log(Avenger.avgAge);
    //Metodos publicos
    // console.log(antman.bio());
    // Metodos static
    // console.log(Avenger.getAvAge(),'Metodo estatico')
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            // console.log('Constructor Avenger llamado');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutan) {
            super(name, realName);
            this.isMutan = isMutan;
            // console.log('Constructor Xmen llamado') 
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
    }
    const wolwerine = new Xmen('Wolwerine', 'Logan', true);
    // console.log(wolwerine);
    // Accedo a un metodo extendido de mi clase avenger y lo utilizo en mi nueva clase xmen
    // wolwerine.getFullNameDesdeXmen()
    // No deja acceder auna propiedad protected
    const nuevoAvenger = new Avenger('Hola', 'Mundo');
    // nuevoAvenger  No aparece el metodo protected para utilizar desde afuera 
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            // console.log('Constructor Avenger llamado');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutan) {
            super(name, realName);
            this.isMutan = isMutan;
            // console.log('Constructor Xmen llamado') 
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error("El nombre debe de ser mayor a 3 caracteres");
            }
            this.name = name;
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
    }
    const wolwerine = new Xmen('Wolwerine', 'Logan', true);
    // console.log(wolwerine);
    //Getter
    // console.log(wolwerine.fullName);
    //Setter
    wolwerine.fullName = 'Facu';
    // console.log(wolwerine.fullName);
})();
(() => {
    // Patron Singleton 
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis el unico');
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis1.changeName('Xavier');
    console.log(apocalipsis1);
    console.log(apocalipsis2);
    console.log(apocalipsis3);
})();
//# sourceMappingURL=main.js.map