
//Para decirle a ts que son archivos independientes
(() => {

    let isSuperman: boolean = true;
    let isBatman: boolean = false;

    isSuperman = true && false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });

})()