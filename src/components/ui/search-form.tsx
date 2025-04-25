"use client";

import { useQuery } from "@tanstack/react-query";
import { Input } from "./input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CityList from "../city-list";
import { CityWeather } from "@/types/weather.types";
import { CircleAlert, MapPin, Search, Loader2 } from "lucide-react";

type SearchProps = {
    searchParam?: string;
}

interface CityResponse {
    count: number
    cities: CityWeather[]
}

const fetchCitiesByLetter = async (letter: string): Promise<CityResponse> => {
    if (!letter) return { count: 0, cities: [] }

    const response = await fetch(`/api/cities/by-letter/${letter}`)
    if (!response.ok) {
        throw new Error('Failed to fetch cities')
    }
    const cities = await response.json() as CityResponse;
    return cities;
}

export default function CitySearch({ }: SearchProps) {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const router = useRouter();

    const queryLetter = searchParams.get('citiesStartsWith') || '';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        // check if the letter is valid
        // A-Z, a-z, 1 letter only
        // or undefined, in the case of deleting the letter
        const isValidLetter = /^[A-Za-z]{1}$/.test(value);
        if (!isValidLetter && value) {
            return;
        }

        if (value && value.length === 1) {
            const params = new URLSearchParams(searchParams.toString());
            params.set("citiesStartsWith", value);
            router.replace(`${pathName}?${params.toString()}`);
        } else if (!value || value.length === 0) {
            const params = new URLSearchParams(searchParams.toString());
            params.delete("citiesStartsWith");
            router.replace(`${pathName}?${params.toString()}`);
        }
    }

    const {
        data,
        error,
        isLoading,
        isError,
        isFetching,
        isSuccess,
    } = useQuery({
        queryKey: ['cities', queryLetter],
        queryFn: () => fetchCitiesByLetter(queryLetter),
        enabled: !!queryLetter && queryLetter.length === 1,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });

    return (
        <div className="flex flex-col items-center justify-center gap-6 py-6 px-4">
            <div className="relative w-full max-w-md">
                <div className="absolute left-3 top-2.5 text-gray-400">
                    <Search className="w-5 h-5" />
                </div>
                <Input
                    type="text"
                    placeholder="Enter a letter to search for cities..."
                    value={queryLetter}
                    onChange={handleChange}
                    pattern="[A-Za-z]{1}"
                    className="w-full pl-10 h-10 text-base rounded-md border border-gray-200 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-200"
                    maxLength={1}
                />
                {isFetching && (
                    <div className="absolute right-3 top-2.5 text-blue-500">
                        <Loader2 className="w-5 h-5 animate-spin" />
                    </div>
                )}
            </div>

            <div className="w-full max-w-2xl transition-all duration-300 ease-in-out">
                {isLoading && (
                    <div className="flex justify-center items-center p-8">
                        <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                        <span className="ml-3 text-gray-500">Loading cities...</span>
                    </div>
                )}

                {isError && (
                    <div className="w-full text-center flex flex-col items-center gap-2 p-8 bg-red-50 rounded-lg border border-red-100">
                        <CircleAlert className="w-10 h-10 text-red-500" />
                        <div className="text-lg font-medium text-red-700">
                            Error loading cities
                        </div>
                        <div className="text-sm text-red-600">
                            {error instanceof Error ? error.message : 'Unknown error occurred'}
                        </div>
                    </div>
                )}

                {isSuccess && data.count > 0 && (
                    <div className="w-full">
                        <div className="mb-4 flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-blue-500" />
                            <h2 className="text-lg font-medium text-gray-700">
                                {`${data.count} ${data.count === 1 ? 'city' : 'cities'} found starting with "${queryLetter}"`}
                            </h2>
                        </div>
                        <CityList cities={data.cities} />
                    </div>
                )}

                {isSuccess && data.count === 0 && queryLetter && (
                    <div className="w-full text-center flex flex-col items-center gap-3 p-8 bg-gray-50 rounded-lg border border-gray-100">
                        <CircleAlert className="w-10 h-10 text-gray-400" />
                        <div className="text-lg font-medium text-gray-700">
                            No cities found
                        </div>
                        <div className="text-sm text-gray-500">
                           {` No cities starting with "${queryLetter}" were found in our database.`}
                        </div>
                    </div>
                )}

                {!queryLetter && (
                    <div className="w-full text-center p-8 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="text-lg font-medium text-blue-700 mb-2">
                            Enter a letter to search for cities
                        </div>
                        <div className="text-sm text-blue-600">
                            Type any letter (A-Z) in the search box above to find cities.
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}