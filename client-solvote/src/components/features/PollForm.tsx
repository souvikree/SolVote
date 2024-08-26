import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface PollFormValues {
    question: string;
    options: string[];
}

const PollForm: React.FC = () => {
    const { register, handleSubmit } = useForm<PollFormValues>({
        defaultValues: {
            options: [''] // Initialize options array with one empty option
        }
    });

    const onSubmit: SubmitHandler<PollFormValues> = async (data: PollFormValues) => {
        try {
            // Replace with your API endpoint or blockchain interaction
            const response = await createPoll(data);
            
            if (response.success) {
                // Handle success (e.g., show a success message or redirect)
                console.log('Poll created successfully:', response.data);
                alert('Poll created successfully!');
            } else {
                // Handle failure (e.g., show an error message)
                console.error('Failed to create poll:', response.message);
                alert('Failed to create poll: ' + response.message);
            }
        } catch (error) {
            console.error('Error creating poll:', error);
            alert('An error occurred while creating the poll.');
        }
    };

    // Simulate a function that interacts with a backend API
    const createPoll = async (pollData: PollFormValues) => {
        // This is a placeholder for actual API interaction
        // Replace with your own logic to send poll data to your server or blockchain
        const response = await fetch('/api/create-poll', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pollData),
        });
        return response.json(); // Assume the server returns JSON
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Create a Poll</h2>
            <div className="mb-4">
                <label className="block text-sm font-semibold mb-2 text-gray-700">Poll Question</label>
                <input
                    {...register('question', { required: 'Poll question is required' })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    placeholder="Enter the poll question"
                />
            </div>
            <div className="mb-6">
                <label className="block text-sm font-semibold mb-2 text-gray-700">Options</label>
                {Array.from({ length: 5 }, (_, i) => (
                    <div key={i} className="mb-3">
                        <input
                            {...register(`options.${i}`, { required: `Option ${i + 1} is required` })}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                            placeholder={`Option ${i + 1}`}
                        />
                    </div>
                ))}
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            >
                Create Poll
            </button>
        </form>
    );
};

export default PollForm;
