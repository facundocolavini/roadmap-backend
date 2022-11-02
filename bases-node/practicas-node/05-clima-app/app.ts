import * as dotenv from 'dotenv';
import { colors } from './config';
import { inquirerMenu, listCitys, pause, readInput } from './helpers';
import { Searchs } from './models';
import { City, ClimateCity } from './interfaces/city';

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
                let searchPlaces = await searchs.searchCity(place);
                // Seleccione  el lugar
                let idPlaceSelected = await listCitys(searchPlaces);
                let placeSelected: City | undefined = searchPlaces?.find(p => (p?.id === idPlaceSelected))

                // Obtener temperatura del lugar
                if (placeSelected !== undefined) {
                    const { lat, lng, name } = placeSelected
                    let climateCity = await searchs.getClimateCity(placeSelected);
                    console.log(climateCity, 'ALGO')
                    // Mostrar resultados 
                    console.log(colors.green(`\nInformaión de la ciudad:\n`));
                    console.log(colors.green(`Ciudad: ${colors.warn(name)}`));
                    console.log(colors.green(`Latitud: ${colors.warn(lat)}`));
                    console.log(colors.green(`Longitud: ${colors.warn(lng)}`));
                    console.log(colors.green(`Temperatura:`));
                    console.log(colors.green(`Min: `));
                    console.log(colors.green(`Max:`));
                    // console.log(searchs);
                }

                break;

            case 2:
                console.log(colors.green('\nHistorial de busqueda\n'));
                break;
        }
        if (opt !== 0) await pause();
    } while (opt !== 0)
}

main(); 