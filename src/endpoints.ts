export const poster = 'https://image.tmdb.org/t/p/w500'
export const trending =
  'https://api.themoviedb.org/3/trending/movie/day?api_key=4cb1eeab94f45affe2536f2c684a5c9e'
export const details = (id: string | number): string =>
  `https://api.themoviedb.org/3/movie/${id}?api_key=4cb1eeab94f45affe2536f2c684a5c9e`
export const searchUrl = (query: string): string =>
  `https://api.themoviedb.org/3/search/movie?api_key=4cb1eeab94f45affe2536f2c684a5c9e&query=${encodeURI(
    query
  )}`
