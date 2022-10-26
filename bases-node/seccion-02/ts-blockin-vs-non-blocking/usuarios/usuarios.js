"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsuario = exports.getUsuarioSync = void 0;
const getUsuarioSync = (id) => {
    const startPoint = new Date().getTime();
    while (new Date().getTime() - startPoint <= 3000) { // 3 segundos de ejecucion bloqueante
        // Esperando...
        // Haciendo fetch de base de datos...
        // Robando datos de facebook...
    }
    return {
        id,
        name: `Usuario ${id}`,
    };
};
exports.getUsuarioSync = getUsuarioSync;
const getUsuario = (id, callback) => {
    const usuario = {
        id,
        name: `Usuario ${id}`,
    };
    setTimeout(() => {
        callback(usuario);
    }, 3000);
};
exports.getUsuario = getUsuario;
//# sourceMappingURL=usuarios.js.map