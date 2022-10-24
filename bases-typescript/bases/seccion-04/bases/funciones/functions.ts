(() => {
    const hero: string = 'Flash';

    function returnName(): string {
        return hero;
    }

    const activateBatiSignal = () => {
        return 'Batiseñal activada';
    }

    console.log(typeof activateBatiSignal)
    //infiere el tipo
    const heroName = returnName();

})()