"use client";
import React from 'react';
import PollCard from './PollCard';

const PollList: React.FC = () => {
    const polls = [
        { question: "What is your favorite color?", optionsCount: 4, votesCount: 150, deadline: "2024-12-31" },
        { question: "Which programming language is best?", optionsCount: 6, votesCount: 320, deadline: "2024-11-30" },
        // Add more polls as needed
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {polls.map((poll, index) => (
                <PollCard
                    key={index}
                    question={poll.question}
                    optionsCount={poll.optionsCount}
                    votesCount={poll.votesCount}
                    deadline={poll.deadline}
                />
            ))}
        </div>
    );
};

export default PollList;
