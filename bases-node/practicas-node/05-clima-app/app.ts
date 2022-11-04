import * as dotenv from 'dotenv';
import { colors } from './config';
import { inquirerMenu, listCitys, pause, readInput } from './helpers';
import { City, ResClimateCity } from './interfaces/city';
import { Searchs } from './models';

dotenv.config()

const main = async () => {
    // Opciones del menu
    let opt: number;
    let searchs = new Searchs()

    do {
        opt = await inquirerMenu();
        switch (opt) {
            case 1:
                //Mostra mensaje
                let place = await readInput('Ingrese la ciudad:');
                //Buscar Lugar
                let searchPlaces: City[] = await searchs.searchCity(place);
                // Seleccione  el lugar
                let idPlaceSelected = await listCitys(searchPlaces);
                if (idPlaceSelected === '0') continue;


                let placeSelected: City | undefined = searchPlaces?.find(p => (p?.id === idPlaceSelected))

                // Obtener temperatura del lugar
                if (placeSelected !== undefined) {
                    const { lat, lng, name } = placeSelected;
                    // Guardar en DB
                    searchs.addToHistorial(name)
                    let { temp, temp_min, temp_max, descr } = await searchs.getClimateCity(placeSelected);
                    // console.log(await searchs.getClimateCity(placeSelected))

                    // Mostrar resultados 
                    console.log(colors.green(`\nInformaión de la ciudad:\n`));
                    console.log(colors.green(`Ciudad: ${colors.warn(name)}`));
                    console.log(colors.green(`Latitud: ${colors.warn(lat)}`));
                    console.log(colors.green(`Longitud: ${colors.warn(lng)}`));
                    console.log(colors.green(`Temperatura: ${colors.warn(temp)}`));
                    console.log(colors.green(`Min: ${colors.warn(temp_min)}`));
                    console.log(colors.green(`Max: ${colors.warn(temp_max)}`));
                    console.log(colors.green(`Como esta el clima: ${colors.warn(descr)}`));
                    // console.log(searchs);
                }
                break;

            case 2:
                console.log(colors.green('\nHistorial de busqueda\n'));
                searchs.historyCapitalization.forEach((place, i) => {
                    const idx = i + 1;
                    console.log(`${colors.green(idx)}. ${place}`)
                })


                break;
        }
        if (opt !== 0) await pause();
    } while (opt !== 0)
}

main(); 