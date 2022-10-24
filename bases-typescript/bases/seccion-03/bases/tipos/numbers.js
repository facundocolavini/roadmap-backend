"use strict";
//Para decirle a ts que son archivos independientes
(() => {
    let avengers = 10;
    console.log(avengers);
    // Inferida
    const villians = 20;
    if (avengers < villians) { //undefined < 20
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    //Error de typescript
    avengers = Number('55A');
    console.log({ avengers }); //NaN:Not a number es considerado un numero en js
})();
