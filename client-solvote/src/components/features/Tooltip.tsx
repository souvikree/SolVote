import { FC } from 'react';

interface TooltipProps {
    content: string;
    children: React.ReactNode;
}

const Tooltip: FC<TooltipProps> = ({ content, children }) => {
    return (
        <div className="relative flex items-center group">
            {children}
            <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-sm rounded py-1 px-2">
                {content}
            </div>
        </div>
    );
};

export default Tooltip;
