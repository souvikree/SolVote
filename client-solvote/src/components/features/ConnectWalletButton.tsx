import { FC } from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const ConnectWalletButton: FC = () => {
    const { wallet, connect, disconnect } = useWallet();
    const { connection } = useConnection();

    return (
        <div className="flex items-center">
            {wallet ? (
                <button
                    onClick={() => disconnect()}
                    className="bg-red-600  px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-red-700 transition-colors duration-300"
                >
                    <span className="text-lg">🔒</span>
                    <span>Disconnect</span>
                </button>
            ) : (
                <WalletMultiButton
                    className="bg-red-600  px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors duration-300"
                />
            )}
        </div>
    );
};

export default ConnectWalletButton;




// import { FC } from 'react';

// const ConnectWalletButton: FC = () => {
//     const handleConnect = () => {
//         // Wallet connection logic
//     };

//     return (
//         <button onClick={handleConnect} className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors">
//             <span className="mr-2">🪙</span> Connect Wallet
//         </button>
//     );
// };

// export default ConnectWalletButton;
