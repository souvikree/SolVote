import { FC } from 'react';

interface TooltipProps {
    content: string;
    children: React.ReactNode;
}

const Tooltip: FC<TooltipProps> = ({ content, children }) => {
    return (
        <div className="relative flex items-center group">
            {children}
            <div className="absolute bottom-full mb-2 hidden group-hover:flex justify-center">
                <div className="bg-gray-800 text-white text-xs font-medium rounded-lg py-2 px-4 shadow-lg max-w-xs w-max">
                    {content}
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-5px] w-0 h-0 border-t-8 border-t-gray-800 border-x-8 border-x-transparent"></div>
                </div>
            </div>
        </div>
    );
};

export default Tooltip;
