export const appendGenre = (data) => {
  return {
    type: "genre",
    payLoad: data,
  };
};
export const appendMovies = (data) => {
  return {
    type: "movie",
    payLoad: data,
  };
};
