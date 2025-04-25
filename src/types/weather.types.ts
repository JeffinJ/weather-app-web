export type CityWeather = {
    id: number;
    name: string;
    coord: Coord;
    main: Main;
    dt: number;
    wind: Wind;
    clouds: Clouds;
    weather: Weather[];
    rain: Record<string, number>;
};

export type Coord = {
    lon: number;
    lat: number;
};

export type Main = {
    temp: number;
    tempMin: number;
    tempMax: number;
    pressure: number;
    seaLevel: number;
    grndLevel: number;
    humidity: number;
};

export type Wind = {
    speed: number;
    deg: number;
};

export type Clouds = {
    all: number;
};

export type Weather = {
    id: number;
    main: string;
    description: string;
    icon: string;
};
