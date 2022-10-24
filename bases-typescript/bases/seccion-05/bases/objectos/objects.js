"use strict";
(() => {
    var _a;
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    };
    flash = {
        name: 'Clark Kent',
        // age: 60,
        powers: ['Super fuerza'],
        getName() { return this.name; }
    };
    //"Cannot invoke an object which is possibly 'undefined'" =>  To solve the error, use the optional chaining operator (?.), e.g. employee.doWork?.()
    console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
    // Definicion de un objeto con su tipo en linea 
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad'],
        getName() { return this.name; }
    };
})();
