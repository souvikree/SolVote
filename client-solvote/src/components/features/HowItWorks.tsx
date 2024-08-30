"use client";
import { FC } from 'react';

const HowItWorks: FC = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12 text-gray-800">How It Works</h2>
                <div className="flex flex-col md:flex-row justify-between gap-8">
                    <div className="flex-1 flex-shrink-0 max-w-xs">
                        <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between transform transition-transform duration-300 hover:scale-105">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Connect Wallet</h3>
                                <p className="text-gray-600">Link your Solana wallet to start interacting with polls.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex-shrink-0 max-w-xs">
                        <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between transform transition-transform duration-300 hover:scale-105">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Create Poll</h3>
                                <p className="text-gray-600">Set up your poll question and options easily.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex-shrink-0 max-w-xs">
                        <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between transform transition-transform duration-300 hover:scale-105">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Vote</h3>
                                <p className="text-gray-600">Cast your vote securely using your wallet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex-shrink-0 max-w-xs">
                        <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between transform transition-transform duration-300 hover:scale-105">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-gray-800">View Results</h3>
                                <p className="text-gray-600">Check real-time results and see how others voted.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
