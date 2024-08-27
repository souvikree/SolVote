import '../styles/globals.css'; // Ensure this path is correct
import { AppProps } from 'next/app';
import { ConnectionProvider, WalletProvider as SolanaWalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { useMemo } from 'react';
import { WalletContextProvider } from '@/context/WalletContext'; // Adjust the path as needed

const App = ({ Component, pageProps }: AppProps) => {
    const network = "https://api.mainnet-beta.solana.com";
    const endpoint = useMemo(() => network, [network]);
    const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <SolanaWalletProvider wallets={wallets} autoConnect>
                <WalletContextProvider>
                    <Component {...pageProps} />
                </WalletContextProvider>
            </SolanaWalletProvider>
        </ConnectionProvider>
    );
};

export default App;
