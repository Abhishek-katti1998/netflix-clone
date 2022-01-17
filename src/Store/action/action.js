export const appendGenre = (data) => {
  return {
    type: "genre",
    payLoad: data,
  };
};
export const appendMovies = (data) => {
  console.log("inside action.js", data);
  return {
    type: "movie",
    payLoad: data,
  };
};
export const searchMovies = (data) => {
  return {
    type: "searchMovie",
    payLoad: data,
  };
};

export const loadSearchResults = (data) => {
  return {
    type: "load",
    payLoad: data,
  };
};
export const appendSeries = (data) => {
  return {
    type: "series",
    payLoad: data,
  };
};
export const appendSeriesGenre = (data) => {
  return {
    type: "seriesGenre",
    payLoad: data,
  };
};
