// src/types.ts

export interface Coord {
  lat: number;
  lon: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  feels_like: number;
  grnd_level?: number;
  humidity: number;
  pressure: number;
  sea_level?: number;
  temp: number;
  temp_kf?: number;
  temp_max: number;
  temp_min: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
  pod?: string;
}

export interface Rain {
  "3h"?: number;
}

export interface WeatherData {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface City {
  coord: Coord;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

export interface ForecastListItem {
  clouds: Clouds;
  dt: number;
  dt_txt: string;
  main: Main;
  pop: number;
  sys: Sys;
  visibility: number;
  weather: Weather[];
  wind: Wind;
  rain?: Rain;
  snow?: Rain;
}

export interface ForecastData {
  city: {
    coord: Coord;
    country: string;
    id: number;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  cnt: number;
  cod: string;
  list: Array<ForecastListItem>;
}
