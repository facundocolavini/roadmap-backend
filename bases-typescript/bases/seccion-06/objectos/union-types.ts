(() => {
    //No existe del lado de javascript
    type Hero = {
        name: string,
        age?: number,
        powers: number[],
        getName?: () => string
    }

    // myCustomVariable tiene distintos tipos
    let myCustomVariable: (string | number | Hero) = 'Facundo';
    console.log(typeof myCustomVariable);

    myCustomVariable = 20;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: 'Bruce Wayne',
        age: 43,
        powers: [1],
    };
    console.log(typeof myCustomVariable);
})()