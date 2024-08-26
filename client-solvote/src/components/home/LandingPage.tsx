import React from 'react';
import Head from 'next/head';
import Header from '../common/Header';
import CallToActionButton from '../features/CallToActionButton';
import HowItWorks from '../features/HowItWorks';
import FeaturedPolls from '../features/FeaturedPolls';
import Footer from '../common/Footer';










const LandingPage: React.FC = () => {
    return (
        <>
            <Header />
            <Head>
                <title>Decentralized Voting Platform</title>
                <meta name="description" content="Create and participate in polls with the power of the Solana blockchain." />
            </Head>
            <main className="pt-24 p-6"> 
                <section className="text-center py-16">
                    <h1 className="text-4xl font-bold mb-4">Decentralized Voting Platform</h1>
                    <p className="text-lg mb-8">Create and participate in polls with the power of the Solana blockchain.</p>
                    <div className="flex justify-center space-x-4">
                        <CallToActionButton href="/createpoll" text="Create a Poll" />
                        <CallToActionButton href="/mypolls" text="View Polls" />
                    </div>
                </section>
                <HowItWorks />
                <FeaturedPolls />
            </main>
            <Footer />
        </>
    );
};

  
  export default LandingPage;