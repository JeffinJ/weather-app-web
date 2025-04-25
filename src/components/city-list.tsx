import { CityWeather } from "@/types/weather.types";
import { MapPinned } from "lucide-react";

export default function CityList({ cities }: { cities: CityWeather[] }) {
    return (
        <div className="flex flex-col gap-y-3 transition-all duration-500 ease-in-out animate-fade-in">
            <div className="text-sm font-medium text-gray-500">
                Found <b className="text-black font-bold">{cities.length}</b> { }{cities.length > 1 ? 'cities' : 'city'}
            </div>
            <div className="flex flex-col gap-2 transition-all duration-500 ease-in-out">
                {cities.map((city, index) => (
                    <div
                        key={index}
                        className="px-2 py-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer ring-1 ring-black/25 font-semibold text-sm flex flex-row space-x-2 transition-all duration-500 ease-in-out"
                    >
                        <MapPinned className="w-5 h-5 text-blue-500" />
                        <div>
                            {city.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}