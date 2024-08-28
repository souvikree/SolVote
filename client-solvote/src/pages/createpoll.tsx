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
