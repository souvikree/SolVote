import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

const PollResults: React.FC<{ pollId: string }> = ({ pollId }) => {
    const chartRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const ctx = chartRef.current?.getContext('2d');
        if (ctx) {
            const chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Option 1', 'Option 2', 'Option 3'], // Replace with dynamic labels
                    datasets: [
                        {
                            label: '# of Votes',
                            data: [12, 19, 3], // Replace with dynamic data
                            backgroundColor: ['#1D4ED8', '#10B981', '#F59E0B'],
                            borderColor: ['#1D4ED8', '#10B981', '#F59E0B'],
                            borderWidth: 1,
                        },
                    ],
                },
            });
            return () => chart.destroy();
        }
    }, [pollId]);

    return <canvas ref={chartRef} className="w-full h-64"></canvas>;
};

export default PollResults;
