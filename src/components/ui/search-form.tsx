"use client";

import { useQuery } from "@tanstack/react-query";
import { Input } from "./input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CityList from "../city-list";
import { CityWeather } from "@/types/weather.types";
import { CircleAlert, MapPlusIcon } from "lucide-react";

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

    const handleChanege = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        // check if the leter is valid
        // A-Z, a-z, 1 letter only
        // or undefined, in the case of deleting the letter
        const isValidLetter = /^[A-Za-z]{1}$/.test(value);
        if (!isValidLetter && value) {
            return;
        }


        if (value && value.length === 1) {
            const parms = new URLSearchParams(searchParams.toString());
            parms.set("citiesStartsWith", value);
            router.replace(`${pathName}?${parms.toString()}`);
        } else if (!value || value.length === 0) {
            const parms = new URLSearchParams(searchParams.toString());
            parms.delete("citiesStartsWith");
            router.replace(`${pathName}?${parms.toString()}`);
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
        <div className="flex flex-col items-center justify-center gap-y-10 py-3">

            <div className="flex flex-row items-center gap-2 w-full max-w-xs">
                <MapPlusIcon className="w-10 h-10 text-blue-500" />
                <Input
                    type="text"
                    placeholder="Enter a letter to search for cities"
                    value={queryLetter}
                    onChange={handleChanege}
                    pattern="[A-Za-z]{1}"
                    className="w-full max-w-xs h-10 md:text-md ring-1 rounded ring-slate-400 placeholder:text-sm"
                    maxLength={1}
                />
            </div>

            <div className="flex flex-col gap-2 min-w-[500px] transition-all duration-500 ease-in-out">
                {isLoading && <span className="text-sm text-gray-500">Loading...</span>}
                {isError &&
                    <div className="w-full text-center flex flex-col gap-2 py-5">
                        <CircleAlert className="w-5 h-5 mx-auto text-red-800" />
                        <div className="text-md text-red-500">
                            Error: {error.message}
                        </div>
                    </div>
                }
                {isSuccess && data.count > 0 && (
                    <div className="text-sm w-full">
                        <CityList cities={data.cities} />
                    </div>
                )}
                {isSuccess && data.count === 0 && (
                    <div className="w-full text-center flex flex-col gap-2 py-5">
                        <CircleAlert className="w-5 h-5 mx-auto text-red-800" />
                        <div className="text-md text-gray-500">
                            No cities found
                        </div>
                    </div>
                )}
                {isFetching && <span className="text-sm text-gray-500">Fetching...</span>}
            </div>
        </div>
    );
}