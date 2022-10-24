"use strict";
(() => {
    const addNumber = (a, b) => {
        return a + b;
    };
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;
    let myFunction;
    let myFunction1;
    let Function2;
    // myFunction = 10;
    //Asigno una funcion le paso la referencia a mi addNumbers.
    myFunction = addNumber;
    console.log(myFunction(1, 2));
    //Mando la referencia de mi funcion greet
    myFunction1 = greet;
    console.log(myFunction1('Hola Facundo'));
    //Mando la referencia de mi funcion greet
    Function2 = saveTheWorld;
    console.log(Function2());
})();
