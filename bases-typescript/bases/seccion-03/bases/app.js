"use strict";
//Tecnica para evitar que al declarar mis objetos o variables no terminen cayendo  en el objeto global window que puede ser marcado como un error por eso debemos hacer una funcion autoejecutada IFE
// que va a encapsular mi codigo de js
//Funcion anonima autoinvocada
(() => {
    const a = 10;
    console.log(a);
})();
