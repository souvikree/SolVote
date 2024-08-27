import React from 'react';
// import Header from '../components/common/Header';
import SearchBar from '../components/polls/SearchBar';
import FilterOptions from '../components/polls/FilterOptions';
import PollList from '../components/polls/PollList';

const PollsPage: React.FC = () => {
    return (
        <>
            
            <main className="pt-20 px-6">
                <h1 className="text-4xl font-bold text-center mb-6">Polls</h1>
                <SearchBar />
                <FilterOptions />
                <PollList />
            </main>
            
        </>
    );
};

export default PollsPage;
