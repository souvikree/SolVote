import { FC } from 'react';

const ConnectWalletButton: FC = () => {
    const handleConnect = () => {
        // Wallet connection logic
    };

    return (
        <button onClick={handleConnect} className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors">
            <span className="mr-2">🪙</span> Connect Wallet
        </button>
    );
};

export default ConnectWalletButton;
