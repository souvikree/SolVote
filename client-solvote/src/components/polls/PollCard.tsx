"use client";
import React from 'react';
import Link from 'next/link';

interface PollCardProps {
    question: string;
    optionsCount: number;
    votesCount: number;
    deadline: string;
}

const PollCard: React.FC<PollCardProps> = ({ question, optionsCount, votesCount, deadline }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">{question}</h3>
            <p className="text-gray-600 mb-4">Options: {optionsCount}</p>
            <p className="text-gray-600 mb-4">Votes: {votesCount}</p>
            <p className="text-gray-600 mb-4">Deadline: {deadline}</p>
            <Link href="/poll" as={`/poll/${encodeURIComponent(question)}`} className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
                View Poll
            </Link>
        </div>
    );
};

export default PollCard;
