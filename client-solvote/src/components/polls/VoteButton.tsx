import React, { Dispatch, SetStateAction } from 'react';
import { useSolana } from '../../context/SolanaContext';
import { PublicKey } from '@solana/web3.js';

interface VoteButtonProps {
  pollId: string;
  optionIndex: number;
  setHasVoted: Dispatch<SetStateAction<boolean>>;
}

const VoteButton: React.FC<VoteButtonProps> = ({ pollId, optionIndex }) => {
  const { program } = useSolana();

  const handleVote = async () => {
    if (!program) {
      console.error("Program is null or undefined");
      return;
    }
    try {
      const pollPublicKey = new PublicKey(pollId);
      const tx = await program.methods.vote(pollPublicKey, optionIndex).rpc();
      console.log("Vote cast with transaction signature", tx);
    } catch (error) {
      console.error("Failed to cast vote:", error);
    }
  };

  return (
    <button
      onClick={handleVote}
      className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
    >
      Vote
    </button>
  );
};

export default VoteButton;
