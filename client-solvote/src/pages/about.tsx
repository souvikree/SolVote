import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const About: React.FC = () => {
    return (
        <>
            <Head>
                <title>About Us - VotingApp</title>
                <meta name="description" content="Learn more about VotingApp and its mission." />
            </Head>
            <Header />
            <main className="p-6 mt-24">
                <h1 className="text-3xl font-bold mb-4">About Us</h1>
                <p>Our mission is to provide a fair and transparent voting system, leveraging the power of blockchain technology to ensure the integrity of the voting process.</p>
            </main>
            {/* <Footer /> */}
        </>
    );
};

export default About;
