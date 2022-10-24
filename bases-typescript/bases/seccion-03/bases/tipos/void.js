"use strict";
//Para decirle a ts que son archivos independientes
(() => {
    function callBatman() {
        return;
    }
    function callSuperman() {
        return;
    }
    const a = callBatman();
    console.log(a); //undefined 
})();
