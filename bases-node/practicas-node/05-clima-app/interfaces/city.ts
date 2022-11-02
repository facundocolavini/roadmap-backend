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



export interface WeatherResponse {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
}

export interface WeatherParamsClimate {
    lng: number,
    lat: number,
    lang?: string
}

export interface ClimateCity {
    temp: number;
    temp_min: number;
    temp_max: number;
}