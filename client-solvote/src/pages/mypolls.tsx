import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import FeaturedPolls from '../components/features/FeaturedPolls'; // Or a different component if needed

const MyPolls: React.FC = () => {
    return (
        <>
            <Head>
                <title>My Polls - VotingApp</title>
                <meta name="description" content="View and manage your polls on the decentralized voting platform." />
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
                <h1 className="text-3xl font-bold mb-4">My Polls</h1>
                <FeaturedPolls /> {/* Adjust or create a component for user-specific polls */}
            </main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>&copy; 2024 VotingApp. All rights reserved.</p>
            </footer>
        </>
    );
};

export default MyPolls;
