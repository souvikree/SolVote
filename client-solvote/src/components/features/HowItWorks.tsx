import { FC } from 'react';

const HowItWorks: FC = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">How It Works</h2>
                <div className="flex flex-col md:flex-row justify-around">
                    <div className="w-full md:w-1/4 mb-8 md:mb-0">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Connect Wallet</h3>
                            <p>Link your Solana wallet to start interacting with polls.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 mb-8 md:mb-0">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Create Poll</h3>
                            <p>Set up your poll question and options easily.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 mb-8 md:mb-0">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Vote</h3>
                            <p>Cast your vote securely using your wallet.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">View Results</h3>
                            <p>Check real-time results and see how others voted.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
