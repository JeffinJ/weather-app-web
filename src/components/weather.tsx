"use client";

import { Suspense } from "react";
import CitySearch from "./ui/search-form";

export default function Weather() {
  return (
    <div>
      <Suspense>
        <CitySearch />
      </Suspense>
    </div>
  );
}