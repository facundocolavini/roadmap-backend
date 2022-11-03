export interface CityResp {
    id: string;
    type?: string;
    place_type?: string[];
    relevance?: number;
    properties?: Properties;
    text_es?: string;
    language_es?: string;
    place_name_es?: string;
    text?: string;
    language?: string;
    place_name?: string;
    bbox?: number[];
    center: number[];
    geometry?: Geometry;
    context?: Context[];
}

export interface Context {
    id: string;
    wikidata: string;
    text_es: string;
    language_es: string;
    text: string;
    language: string;
    short_code?: string;
}

export interface Geometry {
    type: string;
    coordinates: number[];
}

export interface Properties {
    wikidata: string;
}


export interface City {
    id: string;
    name: string;
    lng: number;
    lat: number;
}




export interface ResponseApiOpenWeather {
    coord:      Coord;
    weather:    Weather[];
    base:       string;
    main:       Main;
    visibility: number;
    wind:       Wind;
    clouds:     Clouds;
    dt:         number;
    sys:        Sys;
    timezone:   number;
    id:         number;
    name:       string;
    cod:        number;
}

export interface Clouds {
    all: number;
}

export interface Coord {
    lon: number;
    lat: number;
}

export interface Main {
    temp:       number;
    feels_like: number;
    temp_min:   number;
    temp_max:   number;
    pressure:   number;
    humidity:   number;
    sea_level:  number;
    grnd_level: number;
}

export interface Sys {
    sunrise: number;
    sunset:  number;
}

export interface Weather {
    id?:          number;
    main?:        string;
    description: string;
    icon?:        string;
}

export interface Wind {
    speed: number;
    deg:   number;
    gust:  number;
}


export interface ClimateCityWeather {
    main: Main,
    weather: Weather[]
}

export interface ResClimateCity {
    temp:number;
    descr: string;
    temp_max:number;
    temp_min:number;
}

export interface WeatherParamsClimate {
    lng: number;
    lat: number;
    lang?:string;
}