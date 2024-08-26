import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PollForm from '../components/features/PollForm';

const CreatePoll: React.FC = () => {
    return (
        <>
            <Head>
                <title>Create Poll - VotingApp</title>
                <meta name="description" content="Create a new poll on the decentralized voting platform." />
            </Head>
            <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
                <div className="text-2xl font-bold">VotingApp</div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/create-poll">Create Poll</Link></li>
                        <li><Link href="/my-polls">My Polls</Link></li>
                        <li><Link href="/about">About</Link></li>
                    </ul>
                </nav>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Connect Wallet</button>
            </header>
            <main className="p-6">
                <h1 className="text-3xl font-bold mb-4">Create a New Poll</h1>
                <PollForm />
            </main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>&copy; 2024 VotingApp. All rights reserved.</p>
            </footer>
        </>
    );
};

export default CreatePoll;
