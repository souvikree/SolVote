import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Chart, registerables } from 'chart.js';
import Header from '@/components/common/Header';
import PollDetails from '@/components/polls/PollDetails';
import PollResults from '@/components/polls/PollResults';
import VoteButton from '@/components/polls/VoteButton';
import { fetchPollData } from '@/utils/fetchPollData';

Chart.register(...registerables);

const PollPage = ({ pollData }: { pollData: any }) => {
    const { connected } = useWallet();
    const [hasVoted, setHasVoted] = useState(false);

    useEffect(() => {
        // Check if the user has voted (this would require some logic or API call)
    }, []);

    return (
        <>
            <Header />
            <main className="container mx-auto pt-28 px-4">
                <PollDetails poll={pollData} />
                <div className="my-8">
                    {!hasVoted ? (
                        connected ? <VoteButton pollId={pollData.id} setHasVoted={setHasVoted} optionIndex={0} /> : <p>Please connect your wallet to vote.</p>
                    ) : (
                        <PollResults pollId={pollData.id} />
                    )}
                </div>
            </main>
        </>
    );
};

export default PollPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    // const { query } = context;
    // const id = Array.isArray(query.id) ? query.id[0] : query.id; // Type assertion to make sure id is not undefined
    // if (!id) {
    //     // Handle the case when id is undefined
    //     return { props: {} };
    // }
    // const pollData = await fetchPollData(id); // Fetch poll data from your backend
    // return { props: { pollData } };

    const pollData = {
        id: '1',
        question: 'What is your favorite programming language?',
        options: [
            { id: 1, text: 'JavaScript', votes: 10 },
            { id: 2, text: 'TypeScript', votes: 8 },
            { id: 3, text: 'Python', votes: 6 },
            { id: 4, text: 'Java', votes: 4 },
            { id: 5, text: 'C++', votes: 2 },
        ],
        totalVotes: 30
    };

    return { props: { pollData } };
};
