import fs from 'fs';
import axios from 'axios';
import { City, CityResp, ClimateCityWeather, ResClimateCity, Weather, WeatherParamsClimate } from '../interfaces/city';

export class Searchs {
    public history: Array<string> = [];
    private readonly dbPath = './db/database.json';
    constructor() {
        // TODO: Leer DB si existe
        this.readDB()

    }

    //Getters
    get paramsMapBox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }

    get getParamsOpenWeatherMap() {
        return {
            'APPID': process.env.OPENWEATHERMAP_KEY,
        }
    }

    async searchCity(place: string = ''):Promise<City[]> {// Es asyncrono por que se conecta a una db o pega a una api externa o algo externo

        const URL: string = `https://api.mapbox.com/geocoding/v5/mapbox.places`;
        const SEARCH_STRING = `/${place}.json`;
        try {
            const instance = axios.create({
                baseURL: URL,
                params: this.paramsMapBox
            })
            const resp = await instance.get(SEARCH_STRING);

            const resSearch: City[] = resp.data.features.map((place: CityResp) => {
                return {
                    id: place?.id,
                    name: place?.place_name,
                    lng: place?.center[0],
                    lat: place?.center[1]
                } as City
            })
            return resSearch as City[]
        }
        catch (error) {
            console.log(error);
            return [] as any

        }
    }

    async getClimateCity({ lat, lng, lang = 'es' }: WeatherParamsClimate): Promise<ResClimateCity> {
        const URL: string = `https://api.openweathermap.org/data/2.5/weather`;

        try {
            const instance = axios.create({
                baseURL: URL,
                params: {
                    ...this.getParamsOpenWeatherMap,
                    lat,
                    lng,
                    lang
                }

            })
            // Forma de fernando
            const resp = await instance.get(`?lat=${lat}&lon=${lng}&lang=${lang}&units=metric`);
            const  { main, weather } = resp?.data;

            return {
                descr: weather[0]?.description,
                temp: main?.temp,
                temp_min: main?.temp_min,
                temp_max: main?.temp_max
            }  as ResClimateCity
            // MI forma
/*             const resp = await instance.get(`?lat=${lat}&lon=${lng}&lang=${lang}&units=metric`);
            const respTemp = [(resp.data.main)].find((p) => {
            
               return {
                    temp: p.main?.temp,
                    temp_min: p.main?.temp_min,
                    temp_max: p.main?.temp_max,
                    // descr: p.weather[0]?.description
                } 

            })

            const respWeather = resp?.data.weather?.find((w: Weather) => {
                
                return {

                     descr: w?.description
                 } 
 
            })


           return {
                ...respTemp,
                descr: respWeather?.description
           } 
 */
        } catch (error) {
            console.log(error);
            return [] as any

        }
    }
    
    addToHistorial(place:string = ''){
        // Grabar los buscados
        if(this.history.includes(place.toLocaleLowerCase()))return;

        this.history.unshift(place)
        this.saveInDb()
        //Prevenir duplicado       
    }

    saveInDb(){
        const payload = {
            history:this.history
        }

        fs.writeFileSync(this.dbPath, JSON.stringify(payload))
    }

    readDB(){
       
        if (!fs.existsSync(this.dbPath)) { // Si mi db existe
            return null;
        }
    
        const dataString = fs.readFileSync(this.dbPath, { encoding: 'utf-8' })//Encoding para que no me regrese los bytes
        // Parsea de string a mi array 
        const dataArray = JSON.parse(dataString);
        
        return dataArray;
        
    }

    readCitysOnDB(arrCitys = []) {
        // if (!arrTasks) {
        //     throw new Error("No hay tareas en la DB");
        // }


        // arrTasks.map((task: Task) => {
        //     this.tasksList = {
        //         ...this.tasksList, // Todas las tareas anteriores
        //         [task.id]: task,
        //     }
        // })
        // console.log(`Tareas en DB:\n`)
        // console.log(this.tasksList)

        //Forma de fernando 

        // arrCitys.forEach((city) => {
        //     this.history[city?.id] = city;
        // })

    }
}