
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface PollFormValues {
    question: string;
    options: string[];
}

const PollForm: React.FC = () => {
    const { register, handleSubmit, control } = useForm<PollFormValues>();
  
    const onSubmit: SubmitHandler<PollFormValues> = (data: PollFormValues) => {
      // Poll creation logic
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label className="block text-sm font-semibold mb-2">Poll Question</label>
          <input {...register('question', { required: true })} className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Options</label>
          {Array.from({ length: 5 }, (_, i) => (
            <input
              key={i}
              {...register(`options.${i}`, { required: true })}
              className="w-full p-2 border border-gray-300 rounded mb-2"
              placeholder={`Option ${i + 1}`}
            />
          ))}
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
          Create Poll
        </button>
      </form>
    );
  };

export default PollForm;
