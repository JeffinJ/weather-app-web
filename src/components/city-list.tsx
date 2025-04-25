import { CityWeather } from "@/types/weather.types";
import { CityWeatherInfoDialog } from "./city-weather-info";

export default function CityList({ cities }: { cities: CityWeather[] }) {
    return (
        <div className="flex flex-col gap-y-3 transition-all duration-500 ease-in-out animate-fade-in">
            <div className="flex flex-col gap-2 transition-all duration-500 ease-in-out">
                {cities.map((city, index) => (
                    <CityWeatherInfoDialog key={index} cityWeather={city}/>
                ))}
            </div>
        </div>
    );
}