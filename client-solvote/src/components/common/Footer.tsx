"use client";
import { FC } from 'react';

const Footer: FC = () => {
    return (
        <footer className="bg-gray-800 py-4 mt-14 text-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-4">
                <div className="text-sm mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} SolVote. All rights reserved.
                </div>
                <div className="flex space-x-6">
                    <a href="/privacy-policy" className="text-sm hover:underline hover:text-blue-400 transition duration-300">Privacy Policy</a>
                    <a href="/contact" className="text-sm hover:underline hover:text-blue-400 transition duration-300">Contact</a>
                    <a href="/" className="text-sm hover:underline hover:text-blue-400 transition duration-300">Social Media</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
