(() => {
    const fullName = (firstName: string, lastName?: string): string => { // ? hace que el parametro se vuelva opcional
        return `${firstName} ${lastName || ''}`;

    }

    const name: string = fullName('Tony');
    console.log({ name });

})()