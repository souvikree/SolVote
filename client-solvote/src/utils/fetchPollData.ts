// /src/utils/fetchPollData.ts
"use client";
export const fetchPollData = async (id: string | string[]): Promise<any> => {
    try {
        const response = await fetch(`/api/polls/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch poll data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching poll data:', error);
        return null;
    }
};
