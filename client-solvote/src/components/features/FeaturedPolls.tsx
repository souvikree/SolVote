import { FC } from 'react';
import PollCard from './PollCard';

const featuredPolls = [
    { question: 'Poll 1 Question?', optionsSummary: 'Summary of options', votes: 120, onViewMore: () => {} },
    { question: 'Poll 2 Question?', optionsSummary: 'Summary of options', votes: 95, onViewMore: () => {} },
    // Add more poll data as needed
];

const FeaturedPolls: FC = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Featured Polls</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredPolls.map((poll, index) => (
                        <PollCard
                            key={index}
                            question={poll.question}
                            optionsSummary={poll.optionsSummary}
                            votes={poll.votes}
                            onViewMore={poll.onViewMore}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedPolls;
