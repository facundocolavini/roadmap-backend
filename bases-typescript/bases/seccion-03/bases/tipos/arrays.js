"use strict";
//Para decirle a ts que son archivos independientes
(() => {
    // const numbers: (string | number | boolean)= [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villians.forEach(villian => console.log(villian.toUpperCase()));
})();
