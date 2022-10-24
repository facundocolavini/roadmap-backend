"use strict";
(() => {
    // myCustomVariable tiene distintos tipos
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
