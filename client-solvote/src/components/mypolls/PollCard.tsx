"use client";
import { FC } from 'react';
import { Poll } from '@/utils/fetchPolls';

interface PollCardProps {
    poll: Poll;
}

const PollCard: FC<PollCardProps> = ({ poll }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">{poll.question}</h2>
            <p className="text-gray-700 mb-2">Number of Votes: {poll.votes}</p>
            <p className={`text-sm font-semibold mb-4 ${poll.status === 'open' ? 'text-green-500' : 'text-red-500'}`}>
                Status: {poll.status}
            </p>
            <a href={`/polls/${poll.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-lg text-center block hover:bg-blue-600 transition">
                View Poll
            </a>
        </div>
    );
};

export default PollCard;
