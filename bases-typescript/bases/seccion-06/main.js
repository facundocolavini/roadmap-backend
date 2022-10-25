"use strict";
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
console.log(apocalipsis);
let mystique;
mystique = charles;
mystique = apocalipsis;
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || ''}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
(() => {
    const addNumber = (a, b) => {
        return a + b;
    };
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;
    let myFunction;
    let myFunction1;
    let Function2;
    myFunction = addNumber;
    console.log(myFunction(1, 2));
    myFunction1 = greet;
    console.log(myFunction1('Hola Facundo'));
    Function2 = saveTheWorld;
    console.log(Function2());
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return 'Batiseñal activada';
    };
    console.log(typeof activateBatiSignal);
    const heroName = returnName();
})();
(() => {
    var _a;
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    };
    flash = {
        name: 'Clark Kent',
        powers: ['Super fuerza'],
        getName() { return this.name; }
    };
    console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad'],
        getName() { return this.name; }
    };
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad'],
        getName() { return this.name; }
    };
})();
(() => {
    let myCustomVariable = 'Facundo';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce Wayne',
        age: 43,
        powers: [1],
    };
    console.log(typeof myCustomVariable);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    console.log(avenger.charAt(0));
    avenger = 150.223;
    console.log(avenger.toFixed(2));
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villians.forEach(villian => console.log(villian.toUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = true && false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    let enumeracion;
    (function (enumeracion) {
        enumeracion[enumeracion["a"] = 10] = "a";
        enumeracion[enumeracion["b"] = 11] = "b";
        enumeracion[enumeracion["c"] = 9] = "c";
        enumeracion[enumeracion["d"] = 10] = "d";
    })(enumeracion || (enumeracion = {}));
    console.log(currentAudio);
    console.log(AudioLevel);
    console.log(enumeracion);
})();
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    error('Auxilio!');
})();
(() => {
    let nada = undefined;
})();
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avengers = Number('55A');
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = 'Linterna Verde';
    const volcanNegro = `Heroe: Volcan Negro`;
    console.log(`I'm ${batman}`);
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase()) || 'No esta presente');
})();
(() => {
    const hero = ['Dr Strange', 100];
    hero[1] = 50;
    hero[0] = 'TASED';
    console.log(hero);
})();
(() => {
    function callBatman() {
        return;
    }
    function callSuperman() {
        return;
    }
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map