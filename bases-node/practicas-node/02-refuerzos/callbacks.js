"use strict";
setTimeout(() => {
    console.log();
}, 1000);
const getUsuarioById = (id, callback) => {
    const usuario = {
        id,
        name: 'Facundo'
    };
    setTimeout(() => {
        callback(usuario);
    }, 1500);
};
getUsuarioById(1, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.name.toUpperCase());
});
//# sourceMappingURL=callbacks.js.map