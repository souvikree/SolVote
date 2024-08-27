import { FC } from 'react';

const LoadingSpinner: FC = () => {
    return (
        <div className="flex items-center justify-center py-16">
            <div className="border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin" />
        </div>
    );
};

export default LoadingSpinner;
