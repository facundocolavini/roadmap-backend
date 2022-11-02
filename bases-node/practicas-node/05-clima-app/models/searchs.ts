import axios from 'axios';
import { City, CityResp, WeatherParamsClimate, WeatherResponse, ClimateCity } from '../interfaces/city';

export class Searchs {
    public history: Array<string> = [];

    constructor() {
        // TODO: Leer DB si existe

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
            'APPID': process.env.OPENWEATHERMAP_KEY
        }
    }

    async searchCity(place: string) {// Es asyncrono por que se conecta a una db o pega a una api externa o algo externo

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
                }
            })
            return resSearch
        }
        catch (error) {
            console.log(error);
            return []

        }
    }

    async getClimateCity({ lat, lng, lang = 'es' }: WeatherParamsClimate) {
        const URL: string = `https://api.openweathermap.org/data/2.5/weather`;

        try {
            const instance = axios.create({
                baseURL: URL,
                params: this.getParamsOpenWeatherMap

            })

            const resp = await instance.get(`?lat=${lat}&lon=${lng}&lang=${lang}`);
            [resp.data]?.find((p: WeatherResponse) => ({
                p
            }))
            /*          {
                         temp: p.temp,
                         temp_min: p.temp_min,
                         temp_max: p.temp_max
                     } as ClimateCity */


        } catch (error) {
            console.log(error);
            return []

        }


    }
}