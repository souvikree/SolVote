"use client";
import React from 'react';
import ProgressBar from './ProgressBar';

const PollOptions: React.FC<{ options: any[] }> = ({ options }) => {
    return (
        <ul>
            {options.map((option, index) => (
                <li key={index} className="mb-2">
                    <div className="flex items-center justify-between">
                        <span>{option.text}</span>
                        <span>{option.votes} votes</span>
                    </div>
                    <ProgressBar percentage={(option.votes / option.totalVotes) * 100} />
                </li>
            ))}
        </ul>
    );
};

export default PollOptions;
