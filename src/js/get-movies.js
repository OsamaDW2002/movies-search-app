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

        return await response.json();

    } catch (error) {
        throw error;
    }
};

