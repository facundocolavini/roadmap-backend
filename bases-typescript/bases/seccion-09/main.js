"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    };
    // Definicion de objeto con mi type Hero
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad'],
        getName() { return this.name; }
    };
})();
(() => {
    //Implementamos mi interface en Mutant
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower() { return `${this.name} ${this.realName}`; }
    }
})();
(() => {
    const client = {
        name: 'Fernando',
        // age: 25,
        address: {
            id: 125,
            zip: 'KE3 SUD',
            city: 'Ottawa'
        },
        getFullAddres(id) {
            return 'Hola';
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        getFullAddres(id) {
            return 'Hola';
        }
    };
})();
(() => {
    let addNumberFunction;
    addNumberFunction = (a, b) => {
        return 10;
    };
})();
(() => {
    // Crear interfaces
    const conducirBatimovil = (auto) => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelerar();
    };
    const batimovil = {
        encender: false,
        velocidadMaxima: 0,
        acelerar() {
            console.log("...... gogogo!!!");
        }
    };
    batimovil.acelerar();
    const guason = {
        reir: true,
        comer: true,
        llorar: false
    };
    console.log(guason);
    const reir = (guason) => {
        if (guason.reir) {
            console.log("JAJAJAJA");
        }
    };
    reir(guason);
    const ciudadGotica = (ciudadanos) => {
        return ciudadanos.length;
    };
    console.log(ciudadGotica(["1", "2", "3"]));
    /*
      propiedades:
        - nombre
        - edad
        - sexo
        - estadoCivil
        - imprimirBio(): void // en consola una breve descripcion.
    */
    class Persona {
        constructor(name, age, sex, maritalStatus) {
            this.name = name;
            this.age = age;
            this.sex = sex;
            this.maritalStatus = maritalStatus;
        }
        imprimirBio() {
            return `
      Nombre: ${this.name}
      Edad: ${this.age}
      Sexo: ${this.sex} 
      Estado Civil: ${this.maritalStatus}
    `;
        }
    }
    const facundo = new Persona("Facundo", 27, 'Masculino', 'Soltero');
    console.log(facundo);
    console.log(facundo.imprimirBio());
})();
//# sourceMappingURL=main.js.map