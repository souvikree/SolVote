"use client";
import React from 'react';

const FilterOptions: React.FC = () => {
    return (
        <div className="flex justify-center space-x-4 mt-4">
            <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">All</button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Most Voted</button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Latest</button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Ending Soon</button>
        </div>
    );
};

export default FilterOptions;
