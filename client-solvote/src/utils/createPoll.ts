export const createPoll = async (data: any) => {
    try {
        const response = await fetch('/api/createPoll', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error creating poll:', error);
        return { success: false };
    }
};
