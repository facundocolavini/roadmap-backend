(() => {
    const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {//Los argumentos  opcionales  van siempre al final
        if (upper) {
            return `${firstName} ${lastName}`.toUpperCase();
        } else {
            return `${firstName} ${lastName}`;
        }

    }

    const name: string = fullName('Tony', 'Stark', true);
    console.log({ name });

})() 