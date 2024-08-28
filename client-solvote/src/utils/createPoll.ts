import { PublicKey, SystemProgram } from '@solana/web3.js';
import { Program, AnchorProvider, web3 } from '@coral-xyz/anchor';
// import { IDL } from '../idl/solvote_wallet.json'; // Adjust the path to your IDL file

interface Wallet {
    publicKey: PublicKey;
    signTransaction: (transaction: web3.Transaction) => Promise<web3.Transaction>;
    signAllTransactions: (transactions: web3.Transaction[]) => Promise<web3.Transaction[]>;
}

export const createPoll = async (
    program: Program,
    wallet: Wallet,
    question: string,
    options: string[]
) => {
    try {
        // Generate a new Keypair for the poll account
        const pollAccount = web3.Keypair.generate();

        // Create the poll account and initialize it
        await program.methods.createPoll(question, options)
            .accounts({
                poll: pollAccount.publicKey,
                user: wallet.publicKey,
                systemProgram: SystemProgram.programId,
            })
            .signers([pollAccount])
            .rpc();

        // Optional: Send the created poll data to your backend API
        const data = {
            pollPublicKey: pollAccount.publicKey.toString(),
            question,
            options,
            creator: wallet.publicKey.toString(),
        };

        const response = await fetch('/api/createPoll', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        return { success: true, result };

    } catch (error) {
        console.error('Error creating poll:', error);
        return { success: false, error };
    }
};
