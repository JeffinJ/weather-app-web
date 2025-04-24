import Weather from "@/components/weather";

export default function Home() {
  return (
    <div className="h-screen p-5">
      <div className="ring-1 ring-black/15 drop-shadow-2xl shadow-slate-800 rounded-md min-h-full ">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-4xl font-bold text-center">Weather App</h1>
          <p className="text-md text-center">
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
