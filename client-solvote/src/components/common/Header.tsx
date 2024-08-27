import Link from 'next/link';
import React from 'react';
import ConnectWalletButton from '../features/ConnectWalletButton';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md fixed top-0 left-0 w-full h-24 z-50">
            <div className="container mx-auto flex items-center justify-between p-4 md:p-6 lg:p-8">
                <div className="text-xl font-bold text-gray-800">
                    <Link href="/" className="hover:text-blue-600 transition-colors duration-300">
                        SolVote
                    </Link>
                </div>
                <nav className="hidden md:flex space-x-6">
                    <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                        Home
                    </Link>
                    <Link href="/createpoll" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                        Create Poll
                    </Link>
                    <Link href="/mypolls" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                        My Polls
                    </Link>
                    <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                        About
                    </Link>
                </nav>
                <div className="md:hidden">
                    <button className="text-gray-600 hover:text-blue-600 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                <ConnectWalletButton />
            </div>
            {/* Mobile menu */}
            <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg mt-2">
                <div className="container mx-auto p-4">
                    <Link href="/" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-300">
                        Home
                    </Link>
                    <Link href="/createpoll" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-300">
                        Create Poll
                    </Link>
                    <Link href="/mypolls" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-300">
                        My Polls
                    </Link>
                    <Link href="/about" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-300">
                        About
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
