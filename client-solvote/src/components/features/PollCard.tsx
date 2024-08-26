import { FC } from 'react';

interface PollCardProps {
    question: string;
    optionsSummary: string;
    votes: number;
    onViewMore: () => void;
}

const PollCard: FC<PollCardProps> = ({ question, optionsSummary, votes, onViewMore }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">{question}</h3>
            <p className="mb-4">{optionsSummary}</p>
            <p className="text-gray-600 mb-4">Total Votes: {votes}</p>
            <button onClick={onViewMore} className="text-blue-500 hover:underline">View More</button>
        </div>
    );
};

export default PollCard;
