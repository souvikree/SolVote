import '../styles/globals.css'; // Ensure this path is correct
import { AppProps } from 'next/app';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { useMemo } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
    const network = "https://api.mainnet-beta.solana.com";
    const endpoint = useMemo(() => network, [network]);
    const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <Component {...pageProps} />
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default App;
