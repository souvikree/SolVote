import { FC } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import PollCard from './PollCard';
import { Poll } from '@/utils/fetchPolls';

interface UserPollListProps {
    polls: Poll[];
}

const UserPollList: FC<UserPollListProps> = ({ polls }) => {
    const { publicKey } = useWallet();

    return (
        <div className="container mx-auto pt-32 px-14">
            <h1 className="text-2xl font-bold mb-6">Your Polls</h1>
            <div className="mb-6">
                <p className="text-gray-700">Connected Wallet Address: <span className="font-semibold">{publicKey?.toBase58()}</span></p>
            </div>
            {polls.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {polls.map(poll => (
                        <PollCard key={poll.id} poll={poll} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">You haven’t created any polls yet.</p>
            )}
        </div>
    );
};

export default UserPollList;
