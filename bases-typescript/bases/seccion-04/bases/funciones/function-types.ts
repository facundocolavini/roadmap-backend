(() => {
    const addNumber = (a: number, b: number): number => {
        return a + b;
    }
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;


    let myFunction: (y: number, z: number) => number;
    let myFunction1: (y: string) => string;
    let Function2: () => string;
    // myFunction = 10;

    //Asigno una funcion le paso la referencia a mi addNumbers.
    myFunction = addNumber
    console.log(myFunction(1, 2));

    //Mando la referencia de mi funcion greet
    myFunction1 = greet
    console.log(myFunction1('Hola Facundo'));


    //Mando la referencia de mi funcion greet
    Function2 = saveTheWorld
    console.log(Function2());

})() 