"use client";
import { FC } from 'react';

const AboutSection: FC = () => {
    return (
        <section className="bg-white  py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">About Our Platform 🌟</h1>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 ">
                        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Mission Statement 🚀</h2>
                        <p className="text-gray-700 mb-4">
                            Our platform aims to revolutionize how polls and surveys are conducted by leveraging the power of blockchain technology, ensuring transparency and security. 🛡️🔍
                        </p>
                    </div>
                    <div className="bg-white p-6 ">
                        <h2 className="text-3xl font-semibold mb-4 text-gray-800">How It Works ⚙️</h2>
                        <p className="text-gray-700 mb-4">
                            Users can create polls and vote on them using a secure and transparent blockchain system. Our integration with the Solana blockchain ensures fast transactions and low fees. ⚡💸
                        </p>
                    </div>
                </div>
                {/* Optional Team Information */}
                <div className="mt-12 bg-white p-6 ">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Team 👩‍💻👨‍💻</h2>
                    <p className="text-gray-700 mb-4">
                        We are a dedicated team of developers passionate about blockchain technology and its potential to transform industries. Our team consists of experts in blockchain development, UI/UX design, and more. 🌐💡
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
