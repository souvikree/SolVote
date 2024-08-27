import React from 'react';
import PollOptions from './PollOptions';

interface Option {
    id: number;
    text: string;
    votes: number;
}

interface Poll {
    question: string;
    options: Option[];
    totalVotes: number;
}

const PollDetails: React.FC<{ poll?: Poll }> = ({ poll }) => {
    // Handle the case where poll is not provided
    if (!poll) {
        return <div className="bg-white p-6 mt-10 rounded-lg shadow-lg">Loading...</div>;
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">{poll.question}</h1>
            <PollOptions options={poll.options} />
            <p className="mt-4 text-gray-600">Total Votes: {poll.totalVotes}</p>
        </div>
    );
};

export default PollDetails;
