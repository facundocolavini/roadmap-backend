"use strict";
//Para decirle a ts que son archivos independientes
(() => {
    // El primer dato siempre va a ser un string y el segundo va a ser siempre un numero
    const hero = ['Dr Strange', 100];
    hero[1] = 50;
    hero[0] = 'TASED';
    console.log(hero);
})();
