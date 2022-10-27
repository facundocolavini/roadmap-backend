const { crearArchivoTablas } =  require('./helpers/multiplicar')
/* 
Vamos a imprimir y grabar la tabla de multiplicar en un archivo de texto en la misma direccion de mi aplicacion.

*/


console.clear()

// Argumentos y path donde se ejecuta mi aplicacion de node
// console.log(process.argv)

// const [,,arg3= 'base=5'] =  process.argv
// const [,nrbase = 5] = arg3.split('=')
// console.log(nrbase)

let base: number = 32;


crearArchivoTablas(base)
    .then((fileName:string) => {
        console.log('TODO BIEN')
        console.log(fileName,'creado')
    })
    .catch((error:string) => {
        console.log('TODO BIEN')
        console.log(error)
    })


// Crear archivo con writeFile
// fs.writeFile(`tabla-${base}.txt`,salida,(err:string)=>{
//     if(err) throw err
//     console.log('El archivo se creo con exito!')
// })

