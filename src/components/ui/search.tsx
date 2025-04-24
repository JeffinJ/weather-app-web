"use client";

import { Input } from "./input";

type SearchProps = {
    searchParam: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function SearchForm({ searchParam, onChange }: SearchProps) {

    return (
        <div className="flex items-center justify-center gap-2">
            <Input
                type="text"
                placeholder="Enter a letter"
                value={searchParam}
                onChange={(e) => onChange(e)}
                className="w-full max-w-xs"
                maxLength={1}
            />
        </div>
    );
}