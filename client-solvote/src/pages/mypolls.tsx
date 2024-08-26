import { GetServerSideProps } from 'next';
import UserPollList from '@/components/mypolls/UserPollList';
import { fetchPolls, Poll } from '@/utils/fetchPolls';
import { useWallet } from '@solana/wallet-adapter-react';
import Header from '@/components/common/Header';

const MyPollsPage = ({ polls }: { polls: Poll[] }) => {
    const { connected } = useWallet();

    if (!connected) {
        return (
            <div className="container mx-auto pt-20 px-4 text-center">
                <p className="text-xl">Please connect your wallet to view your polls.</p>
            </div>
        );
    }

    return (
        <>
            <Header/>
            <UserPollList polls={polls}  />
        </>
    );
};

export default MyPollsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const polls = await fetchPolls(); // Fetch polls based on connected wallet
    return { props: { polls } };
};
