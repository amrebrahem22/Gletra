const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'c09f6230d404829d31ddaa465b8e634f',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;