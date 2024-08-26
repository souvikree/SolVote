import { FC } from 'react';

interface FAQ {
    question: string;
    answer: string;
}

const faqs: FAQ[] = [
    {
        question: 'How do I connect my wallet?',
        answer: 'To connect your wallet, click on the "Connect Wallet" button and follow the prompts provided by your wallet extension or application.',
    },
    {
        question: 'What is the Solana blockchain?',
        answer: 'The Solana blockchain is a high-performance decentralized network designed for fast and low-cost transactions. It powers our platform to ensure a smooth user experience.',
    },
    {
        question: 'How can I create a poll?',
        answer: 'To create a poll, navigate to the "Create Poll" page, fill out the poll details, and submit it. Ensure your wallet is connected to complete the process.',
    },
];

const FAQsSection: FC = () => {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="p-6 border border-gray-200 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                            <p className="text-gray-700">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQsSection;
