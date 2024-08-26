import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

const VoteButton: React.FC<{ pollId: string, setHasVoted: (v: boolean) => void }> = ({ pollId, setHasVoted }) => {
    const { connected, publicKey } = useWallet();

    const handleVote = async () => {
        if (connected && publicKey) {
            // Logic to submit the vote
            setHasVoted(true);
        }
    };

    return (
        <button
            onClick={handleVote}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            disabled={!connected}
        >
            Vote
        </button>
    );
};

export default VoteButton;
