import '../styles/globals.css'; // Ensure this path is correct
import { AppProps } from 'next/app';
import { ConnectionProvider, WalletProvider as SolanaWalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { useMemo } from 'react';
import { WalletContextProvider } from '@/context/WalletContext'; // Adjust the path as needed
import { SolanaProvider } from '@/context/SolanaContext';

const App = ({ Component, pageProps }: AppProps) => {
    const network = 'localnet'; // Change to 'localnet' for local development
    const endpoint = useMemo(() => 'http://localhost:8899', []); // Localnet endpoint
    const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <SolanaWalletProvider wallets={wallets} autoConnect>
                <WalletContextProvider>
                    <SolanaProvider>
                        <Component {...pageProps} />
                    </SolanaProvider>
                </WalletContextProvider>
            </SolanaWalletProvider>
        </ConnectionProvider>
    );
};

export default App;
