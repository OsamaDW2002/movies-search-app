export const getMovies = async (endpoint, params = {}) => {
    const baseUrl = 'https://imdb236.p.rapidapi.com';
    const url = new URL(endpoint, baseUrl);

    const searchParams = new URLSearchParams(params);

    url.search = searchParams.toString();

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '023b2d1873msh77417b6529dcabbp14f83ejsnc34d18b3e721',
            'x-rapidapi-host': 'imdb236.p.rapidapi.com',
        },
    };

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result, Array.isArray(result));
        return result;

    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
};

