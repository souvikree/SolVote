import React from 'react';
import Head from 'next/head';
import Header from '../common/Header';
import CallToActionButton from '../features/CallToActionButton';
import HowItWorks from '../features/HowItWorks';
import FeaturedPolls from '../features/FeaturedPolls';
import Footer from '../common/Footer';
import HeroSection from '../common/HeroSection';










const LandingPage: React.FC = () => {
    return (
        <>
            <Header />
            <Head>
                <title>Decentralized Voting Platform</title>
                <meta name="description" content="Create and participate in polls with the power of the Solana blockchain." />
            </Head>
            <main className="pt-24 p-6"> 
                <HeroSection />
                <HowItWorks />
                <FeaturedPolls />
            </main>
            <Footer />
        </>
    );
};

  
  export default LandingPage;