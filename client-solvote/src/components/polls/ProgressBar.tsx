import React from 'react';

const ProgressBar: React.FC<{ percentage: number }> = ({ percentage }) => {
    return (
        <div className="relative h-4 bg-gray-200 rounded-lg overflow-hidden">
            <div
                className="absolute top-0 left-0 h-full bg-blue-600"
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
