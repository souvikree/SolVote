import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import FeaturedPolls from '../components/features/FeaturedPolls'; // Or a different component if needed
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const MyPolls: React.FC = () => {
    return (
        <>
            <Head>
                <title>My Polls - VotingApp</title>
                <meta name="description" content="View and manage your polls on the decentralized voting platform." />
            </Head>
            <Header />
            <main className="p-6">
                <h1 className="text-3xl font-bold mb-4">My Polls</h1>
                <FeaturedPolls /> {/* Adjust or create a component for user-specific polls */}
            </main>
            {/* <Footer /> */}
        </>
    );
};

export default MyPolls;
