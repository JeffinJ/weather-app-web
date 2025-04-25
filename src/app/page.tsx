import Weather from "@/components/weather";
import { CloudSunRainIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen p-5">
      <div className="ring-1 ring-black/15 drop-shadow-2xl shadow-slate-800 rounded-md min-h-full py-10">

        <div className="flex flex-col items-center justify-center gap-2 py-5">
          <div className="flex flex-row items-end justify-end gap-2">
            <CloudSunRainIcon className="w-20 h-20 text-blue-500" />
            <h1 className="text-4xl font-bold text-center up">Weather App</h1>
          </div>
          <p className="text-sm text-center w-full max-w-xs">
            Find weather for cities around the world
          </p>
        </div>

        <div>
          <Weather />
        </div>
      </div>
    </div>
  );
}
