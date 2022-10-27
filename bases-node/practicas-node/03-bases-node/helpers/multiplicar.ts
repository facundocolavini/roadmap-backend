const fs =  require('fs')

//Con promesa
export const createFile = (file: string,base:number) :Promise<string> =>{
    const fsFile  =  fs.writeFileSync(`tabla-${base}.txt`,file)
    console.log(fsFile,'que es');
    
    return new Promise((resolve, reject) =>{
        (fsFile === undefined) 
            ? resolve(fsFile)
            : reject(`El archivo tubo un error al querer crearse`);
    })
}
// Con async - await
export const crearArchivoTablas = async (base:number)=>{

    try{
        let salida: string = '';
        
        console.log('====================');
        console.log(`    TABLA DEL ${base}  `);
        console.log('===================='); 
    
        for(let i = 1 ; i<= 10; i++){
            salida += `${base} X ${i} = ${i * base}\n`
        }

        fs.writeFileSync(`tabla-${base}.txt`,salida)
        //await createFile(salida,base)
        console.log(salida)
        return `tabla-${base}.txt`;
    }catch(error){
       throw  error;
    }

}

module.exports = {
    crearArchivoTablas
}