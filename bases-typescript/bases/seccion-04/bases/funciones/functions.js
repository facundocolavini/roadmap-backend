"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return 'Batiseñal activada';
    };
    console.log(typeof activateBatiSignal);
    //infiere el tipo
    const heroName = returnName();
})();
