import {colors} from './config';
import { confirmAction, inquirerMenu, /* listDeleteTasks */ pause, readInDB, readInput, saveInDB /* showCheckList */ } from './helpers';
import { Searchs } from './models';


const main = async () => {
    // Opciones del menu
    let opt:number ;
    let searchs = new Searchs()
    do{
        opt =  await inquirerMenu();
        switch(opt){
            case 1:
                //Mostra mensaje
                let place = await readInput('Ingrese la ciudad:\n');
                let searchPlace = await searchs.searchCity(place);
                console.log(searchPlace)
                //Buscar Lugar
                // Seleccione  el lugar
                // Clima 
                // Mostrar resultados de clima
                console.log(colors.green(`\nInformaión de la ciudad:\n`));
                console.log(colors.green(`Latitud:`));
                console.log(colors.green(`Longitud:`));
                console.log(colors.green(`Temperatura:`));
                console.log(colors.green(`Min:`));
                console.log(colors.green(`Max:`));
                // console.log(searchs);
                

            break;

            case 2:
                console.log(colors.green('\nHistorial de busqueda\n'));
            break;
        }
        if (opt !== 0) await pause();
    }while(opt !== 0)
}

main(); 