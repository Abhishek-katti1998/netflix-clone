export const API_KEY = "26ea0d14873136cdf3c5e559958f77e7";
export const movieGenre_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
export const movieData_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=`;
export const seriesGenre_API = `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=en-US`;
export const seriesData_API = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=`;
export const searchMovies_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=`;
export const searchTvSeries_API = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&query=`;
export const getVedio_API = (id, obj) =>
  obj.release_date
    ? `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
    : `
https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}&language=en-US`;

export const Settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};
