import { FC } from 'react';
import React from 'react';

const Footer: FC = () => {
    return (
        <footer className="bg-gray-800 py-4 text-white">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-sm">
                    &copy; {new Date().getFullYear()} Decentralized Voting Platform
                </div>
                <div className="space-x-4">
                <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                    <a href="/contact" className="hover:underline">Contact</a>
                    <a href="/" className="hover:underline">Social Media</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
