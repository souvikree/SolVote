// import React from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
// import PollForm from '../components/features/PollForm';
// import Header from '@/components/common/Header';
// import Footer from '@/components/common/Footer';

// const CreatePoll: React.FC = () => {
//     return (
//         <>
//             <Head>
//                 <title>Create Poll - VotingApp</title>
//                 <meta name="description" content="Create a new poll on the decentralized voting platform." />
//             </Head>
//             <Header />
//             <main className="p-6 mt-24">
//                 <h1 className="text-3xl font-bold mb-4">Create a New Poll</h1>
//                 <PollForm />
//             </main>
//             {/* <Footer /> */}
//         </>
//     );
// };

// export default CreatePoll;
import { FC } from 'react';
import Header from '@/components/common/Header';
import PollCreationForm from '@/components/polls/PollCreationForm';

const CreatePollPage: FC = () => {
    return (
        <>
            <Header />
            <main className="container mx-auto pt-20 px-4">
                <PollCreationForm />
            </main>
        </>
    );
};

export default CreatePollPage;
