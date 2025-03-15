const API_HOST = 'ott-details.p.rapidapi.com';
const API_KEY = '023b2d1873msh77417b6529dcabbp14f83ejsnc34d18b3e721';
const getMovies = async (title, page = 1) => {
    try {
        const url = new URL(`https://${API_HOST}/search`);
        url.search = new URLSearchParams({ title, page });

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': API_KEY,
                'x-rapidapi-host': API_HOST
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching movies:', error.message);
    }
};

