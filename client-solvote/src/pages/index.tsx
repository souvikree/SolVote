import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import CallToActionButton from '../components/features/CallToActionButton';
import FeaturedPolls from '../components/features/FeaturedPolls';
import HowItWorks from '../components/features/HowItWorks';

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Decentralized Voting Platform</title>
                <meta name="description" content="Create and participate in polls with the power of the Solana blockchain." />
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
                <section className="text-center py-16">
                    <h1 className="text-4xl font-bold mb-4">Decentralized Voting Platform</h1>
                    <p className="text-lg mb-8">Create and participate in polls with the power of the Solana blockchain.</p>
                    <div className="flex justify-center space-x-4">
                        <CallToActionButton href="/create-poll" text="Create a Poll" />
                        <CallToActionButton href="/my-polls" text="View Polls" />
                    </div>
                </section>
                <HowItWorks />
                <FeaturedPolls />
            </main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>&copy; 2024 VotingApp. All rights reserved.</p>
            </footer>
        </>
    );
};

export default Home;
