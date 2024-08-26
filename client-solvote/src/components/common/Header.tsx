import Link from 'next/link';
import React from 'react';
import ConnectWalletButton from '../features/ConnectWalletButton';



const Header: React.FC = () => {
    return (
        <header className="top-0 left-0 w-full bg-white shadow-md fixed z-50">
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="text-xl font-bold">
                    <Link href="/">Decentralized Voting</Link>
                </div>
                <nav className="space-x-4">
                    <Link href="/" className="hover:text-blue-600">Home</Link>
                    <Link href="/create-poll" className="hover:text-blue-600">Create Poll</Link>
                    <Link href="/my-polls" className="hover:text-blue-600">My Polls</Link>
                    <Link href="/about" className="hover:text-blue-600">About</Link>
                </nav>
                <ConnectWalletButton />
            </div>
        </header>
    );
};
