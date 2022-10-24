"use strict";
(() => {
    // Enviarle a una funmcion con muchos argumentos y hacer  uno obligatorio o el que necesito 
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
