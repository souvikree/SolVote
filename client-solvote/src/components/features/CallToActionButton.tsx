"use client";
import { FC } from 'react';
import Link from 'next/link';

interface CallToActionButtonProps {
    href: string;
    text: string;
}

const CallToActionButton: FC<CallToActionButtonProps> = ({ href, text }) => {
    return (
        <Link href={href} className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors">
            {text}
        </Link>
    );
};

export default CallToActionButton;
