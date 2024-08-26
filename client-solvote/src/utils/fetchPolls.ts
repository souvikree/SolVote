export interface Poll {
    id: string;
    question: string;
    votes: number;
    status: 'open' | 'closed';
}

export const fetchPolls = async (): Promise<Poll[]> => {
    // Replace with actual API call or blockchain query
    // Example static data
    return [
        { id: '1', question: 'What is your favorite color?', votes: 100, status: 'open' },
        { id: '2', question: 'What is your favorite food?', votes: 75, status: 'closed' },
    ];
};
