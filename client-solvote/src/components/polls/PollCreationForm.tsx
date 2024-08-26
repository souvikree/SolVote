import { FC, useState } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/router';
import { createPoll } from '@/utils/createPoll';
import Tooltip from '@/components/features/Tooltip';

interface Option {
    id: number;
    value: string;
}

interface FormData {
    question: string;
    options: Option[];
    deadline?: string;
    category?: string;
    multipleVotes: boolean;
}

const PollCreationForm: FC = () => {
    const { connected } = useWallet();
    const router = useRouter();
    const { control, handleSubmit, reset } = useForm<FormData>({
        defaultValues: {
            question: '',
            options: [{ id: Date.now(), value: '' }],
            deadline: '',
            category: '',
            multipleVotes: false,
        },
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'options',
    });
    const [message, setMessage] = useState<string>('');

    const onSubmit = async (data: FormData) => {
        if (!connected) {
            setMessage('Please connect your wallet to create a poll.');
            return;
        }

        try {
            const result = await createPoll(data);
            if (result.success) {
                setMessage('Poll created successfully!');
                reset();
                router.push('/mypolls'); // Redirect to My Polls page or any other page
            } else {
                setMessage('Failed to create poll.');
            }
        } catch (error) {
            setMessage('An error occurred while creating the poll.');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto p-6 mt-9 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold mb-6">Create a New Poll</h1>
            
            <div className="mb-6">
                <label className="text-gray-700 mb-2 flex items-center" htmlFor="question">
                    Poll Question
                    <Tooltip content="Enter the main question for your poll here.">
                        <span className="ml-2 text-gray-500 cursor-pointer">?</span>
                    </Tooltip>
                </label>
                <Controller
                    name="question"
                    control={control}
                    rules={{ required: 'Poll question is required' }}
                    render={({ field, fieldState }) => (
                        <div>
                            <input
                                id="question"
                                {...field}
                                className={`w-full p-3 border rounded-lg ${fieldState?.error ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Enter your poll question"
                            />
                            {fieldState?.error && <p className="text-red-500 mt-1 text-sm">{fieldState.error.message}</p>}
                        </div>
                    )}
                />
            </div>
            
            <div className="mb-6">
                <label className="block text-gray-700 mb-2">Options</label>
                {fields.map((option, index) => (
                    <div key={option.id} className="flex items-center mb-4">
                        <Controller
                            name={`options.${index}.value`}
                            control={control}
                            rules={{ required: 'Option value is required' }}
                            render={({ field, fieldState }) => (
                                <div className="flex flex-grow">
                                    <input
                                        type="text"
                                        {...field}
                                        className={`flex-grow p-3 border rounded-lg ${fieldState?.error ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder={`Option ${index + 1}`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => remove(index)}
                                        className="ml-2 text-red-500 hover:text-red-700"
                                    >
                                        Remove
                                    </button>
                                    {fieldState?.error && <p className="text-red-500 mt-1 text-sm">{fieldState.error.message}</p>}
                                </div>
                            )}
                        />
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => append({ id: Date.now(), value: '' })}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                    Add Option
                </button>
            </div>
            
            <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="deadline">Deadline</label>
                <Controller
                    name="deadline"
                    control={control}
                    render={({ field }) => (
                        <input
                            type="date"
                            id="deadline"
                            {...field}
                            className="w-full p-3 border rounded-lg"
                        />
                    )}
                />
            </div>
            
            <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="category">Category</label>
                <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                        <input
                            id="category"
                            {...field}
                            className="w-full p-3 border rounded-lg"
                        />
                    )}
                />
            </div>
            
            <label className="flex items-center mb-6">
                <Controller
                    name="multipleVotes"
                    control={control}
                    render={({ field }) => (
                        <input
                            type="checkbox"
                            checked={field.value}
                            onChange={field.onChange}
                            className="form-checkbox h-5 w-5 text-blue-600"
                        />
                    )}
                />
                <span className="ml-3 text-gray-700">Allow Multiple Votes</span>
            </label>
            
            <button
                type="submit"
                className={`w-full py-3 px-4 rounded-lg text-white ${connected ? 'bg-blue-500' : 'bg-gray-400 cursor-not-allowed'}`}
                disabled={!connected}
            >
                Create Poll
            </button>
            {message && <p className="mt-4 text-center text-red-500">{message}</p>}
        </form>
    );
};

export default PollCreationForm;
