import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { CityWeather } from "@/types/weather.types"
import { ArrowRightCircle, MapPinned, Thermometer, Wind, Droplets, Cloud, Compass } from "lucide-react"

type CityWeatherInfoDialogProps = {
    cityWeather: CityWeather
}

export function CityWeatherInfoDialog({ cityWeather }: CityWeatherInfoDialogProps) {
    const formatDate = (timestamp: number) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleString();
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="w-full flex items-center justify-between px-4 py-3 rounded-md text-left hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 group cursor-pointer"
                >
                    <div className="flex items-center gap-3">
                        <MapPinned className="w-5 h-5 text-blue-500 group-hover:text-blue-600" />
                        <span className="font-medium text-gray-700 group-hover:text-gray-900">{cityWeather.name}</span>
                    </div>
                    <ArrowRightCircle className="w-5 h-5 text-blue-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold flex items-center gap-2">
                        <MapPinned className="w-5 h-5 text-blue-500" />
                        {cityWeather.name}
                    </DialogTitle>
                    <DialogDescription>
                        Weather information as of {formatDate(cityWeather.dt)}
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-2">
                    {/* Current weather conditions */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold">Current Conditions</h3>
                        <div className="flex items-center bg-blue-50 p-3 rounded-lg">
                            <div className="text-4xl font-bold text-blue-700">{cityWeather.main.temp}°C</div>
                            <div className="ml-4">
                                {cityWeather.weather && cityWeather.weather[0] && (
                                    <div className="font-medium capitalize">{cityWeather.weather[0].description}</div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Temperature */}
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                            <Thermometer className="w-6 h-6 text-red-500" />
                            <div>
                                <div className="text-xs text-gray-500">Min</div>
                                <div className="font-medium">{cityWeather.main.tempMin}°C</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                            <Thermometer className="w-6 h-6 text-orange-500" />
                            <div>
                                <div className="text-xs text-gray-500">Max</div>
                                <div className="font-medium">{cityWeather.main.tempMax}°C</div>
                            </div>
                        </div>
                    </div>

                    {/* Other weather details */}
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                            <Droplets className="w-6 h-6 text-blue-500" />
                            <div>
                                <div className="text-xs text-gray-500">Humidity</div>
                                <div className="font-medium">{cityWeather.main.humidity}%</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                            <Cloud className="w-6 h-6 text-gray-500" />
                            <div>
                                <div className="text-xs text-gray-500">Cloud Cover</div>
                                <div className="font-medium">{cityWeather.clouds ? cityWeather.clouds.all : 0}%</div>
                            </div>
                        </div>
                    </div>

                    {/* Wind */}
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                            <Wind className="w-6 h-6 text-cyan-500" />
                            <div className="flex-1">
                                <div className="text-xs text-gray-500">Wind</div>
                                <div className="font-medium">{cityWeather.wind.speed} m/s</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                            <Compass className="w-6 h-6 text-gray-500" />
                            <div>
                                <div className="text-xs text-gray-500">Direction</div>
                                <div className="font-medium">{cityWeather.wind.deg}°</div>
                            </div>
                        </div>
                    </div>


                    {/* Pressure */}
                    <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                        <div>
                            <div className="text-xs text-gray-500">Pressure</div>
                            <div className="font-medium">{cityWeather.main.pressure} hPa</div>
                        </div>
                    </div>

                    {/* Rain if available */}
                    {cityWeather.rain && (
                        <div className="flex items-center gap-2 bg-blue-50 p-2 rounded">
                            <div>
                                <div className="text-xs text-gray-500">Rain (3h)</div>
                                <div className="font-medium">{cityWeather.rain["3h"]} mm</div>
                            </div>
                        </div>
                    )}

                    {/* Coordinates */}
                    <div className="text-xs text-gray-500 mt-2">
                        Location: {cityWeather.coord.lat}° N, {cityWeather.coord.lon}° E
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}