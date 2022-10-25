//Para decirle a ts que son archivos independientes
(() => {
    function callBatman(): void {
        return
    }

    function callSuperman(): void {
        return;
    }

    const a = callBatman()

    console.log(a);//undefined 

})()