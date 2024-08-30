"use client";
import '../styles/globals.css'; // Ensure this path is correct
import { AppProps } from 'next/app';
import { ConnectionProvider, WalletProvider as SolanaWalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { useMemo } from 'react';
import { WalletContextProvider } from '@/context/WalletContext'; // Adjust the path as needed
import { SolanaProvider } from '@/context/SolanaContext'; // Adjust the path as needed
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';

const App = ({ Component, pageProps }: AppProps) => {
    const endpoint = useMemo(() => 'http://localhost:8899', []); // Localnet endpoint
    const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <SolanaWalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <WalletContextProvider>
                        <SolanaProvider>
                            <Component {...pageProps} />
                        </SolanaProvider>
                    </WalletContextProvider>
                </WalletModalProvider>
            </SolanaWalletProvider>
        </ConnectionProvider>
    );
};

export default App;
