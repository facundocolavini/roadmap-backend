//Para decirle a ts que son archivos independientes
(() => {
    //El never no tiene un punto alacanzable al finalizar la funcion es decir corta la ejecucion del codigo.Osea no regresa nada.
    //Es una funcion que va a terminar con un error.
    const error = (message: string): never => {
        throw new Error(message)
    }
    error('Auxilio!')
})()