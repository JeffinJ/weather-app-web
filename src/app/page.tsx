import Weather from "@/components/weather";
import { CloudSun, Droplets, ThermometerSun } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-b from-blue-50 to-white p-4 md:p-6">
      <div className="max-w-4xl mx-auto ring-1 ring-black/10 drop-shadow-xl rounded-lg min-h-full py-8 px-4 bg-white flex flex-col justify-between">
        <div>
          <div className="flex flex-col items-center justify-center gap-3 py-6 mb-6 border-b border-gray-100">
            <div className="relative flex flex-row items-center justify-center gap-2">
              <div className="hidden md:block absolute -left-16 bottom-0">
                <ThermometerSun className="w-16 h-16 text-blue-500" />
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 z-10">
                  Weather Lookup
                </h1>
                <div className="flex items-center gap-2 mt-2">
                  <CloudSun className="w-5 h-5 text-blue-400" />
                  <p className="text-sm text-gray-500">
                    Real-time weather for cities around the world
                  </p>
                  <Droplets className="w-5 h-5 text-blue-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="px-2 md:px-4">
            <Weather />
          </div>
        </div>

        <footer className="mt-10 pt-6 border-t border-gray-100 text-center text-xs text-gray-400">
          Weather data powered by OpenWeatherMap API • Updated in real-time
          <br />
          <Link
            target="_blank"
            href="https://jeffinjose.dev"
            className="text-blue-500 hover:text-blue-600 transition-colors duration-200">
            Author: Jeffin Jose
          </Link>
        </footer>
      </div>
    </div>
  );

}
