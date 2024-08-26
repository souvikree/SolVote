import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const PollDetail: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <Head>
                <title>Poll Details - VotingApp</title>
                <meta name="description" content={`Details for poll ${id} on the decentralized voting platform.`} />
            </Head>
            <Header />
            <main className="p-6 mt-24">
                <h1 className="text-3xl font-bold mb-4">Poll Details</h1>
                <p>Details for poll ID: {id}</p>
                {/* Add more content here */}
            </main>
            {/* <Footer /> */}
        </>
    );
};

export default PollDetail;
