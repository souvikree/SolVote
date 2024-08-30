"use client";
import React from 'react';

const SearchBar: React.FC = () => {
    return (
        <div className="relative w-full max-w-md mx-auto">
            <input
                type="text"
                placeholder="Search polls..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
        </div>
    );
};

export default SearchBar;
