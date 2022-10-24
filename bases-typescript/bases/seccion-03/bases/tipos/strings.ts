//Para decirle a ts que son archivos independientes
(() => {
    const batman: string = 'Batman';
    const linternaVerde: string = 'Linterna Verde';
    const volcanNegro = `Heroe: Volcan Negro`;


    console.log(`I'm ${batman}`);

    console.log(batman[10]?.toLocaleUpperCase() || 'No esta presente');



})()