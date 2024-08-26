import { FC } from 'react';
import CallToActionButton from '../features/CallToActionButton';


const HeroSection: FC = () => {
    return (
        <section className="relative bg-blue-600 text-white h-screen flex items-center justify-center text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 opacity-50" />
            <div className="relative z-10">
                <h1 className="text-4xl font-bold mb-4">Decentralized Voting Platform</h1>
                <p className="text-lg mb-8">Create and participate in polls with the power of the Solana blockchain.</p>
                <div className="space-x-4">
                    <CallToActionButton href="/create-poll" text="Create a Poll" />
                    <CallToActionButton href="/polls" text="View Polls" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
