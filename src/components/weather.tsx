"use client";

import SearchForm from "./ui/search";

export default function Weather() {
  return (
        <div>
          <SearchForm
            searchParam=""
            onChange={() => { }}
            onKeyDown={() => { }} />
        </div>
  );
}