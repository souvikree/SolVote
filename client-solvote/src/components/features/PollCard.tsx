import { FC } from 'react';

interface PollCardProps {
    question: string;
    optionsSummary: string;
    votes: number;
    onViewMore: () => void;
}

const PollCard: FC<PollCardProps> = ({ question, optionsSummary, votes, onViewMore }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-[1.02] duration-200 ease-in-out">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 line-clamp-2">{question}</h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{optionsSummary}</p>
            <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">Total Votes: <span className="font-medium text-gray-800">{votes}</span></p>
                <button
                    onClick={onViewMore}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                >
                    View More
                </button>
            </div>
        </div>
    );
};

export default PollCard;
