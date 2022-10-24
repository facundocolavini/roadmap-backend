(() => {
    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    }

    // Definicion de objeto con mi type Hero
    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad'],
        getName() { return this.name; }
    }

})()