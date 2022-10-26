"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuarios_1 = require("./usuarios/usuarios");
console.log('Inicio de programa');
console.time('inicio');
(0, usuarios_1.getUsuario)(1, (usuario) => {
    console.log('Usuario 1:', usuario);
});
(0, usuarios_1.getUsuario)(2, (usuario) => {
    console.log('Usuario 2:', usuario);
    console.timeEnd('inicio');
});
console.log('Fin de programa');
//# sourceMappingURL=app-non-blocking.js.map