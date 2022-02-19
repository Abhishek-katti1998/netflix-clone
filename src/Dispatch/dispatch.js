import {
  appendGenre,
  appendSeriesGenre,
  appendMovies,
  appendSeries,
  loadSearchResults,
  searchMovies,
  appendError,
} from "../Store/action/action";
export const dispatchGenresFunc = (props, genreData, dispatch) => {
  if (props.type === "movie") {
    dispatch(appendGenre(genreData.genres));
  }
  if (props.type === "series") {
    dispatch(appendSeriesGenre(genreData.genres));
  }
};

export const dispatchDataFunc = (
  props,
  data,
  dispatch,
  moviesArray,
  setLoading
) => {
  moviesArray.push(data);
  if (props.type === "movie" && moviesArray.length >= 19) {
    // console.log("moviesArray", moviesArray);
    dispatch(appendMovies(moviesArray));
  }
  if (props.type === "series" && moviesArray.length >= 16) {
    dispatch(appendSeries(moviesArray));
  }
  setLoading(false);
};
export const dispatchSearchResults = (dispatch, data) => {
  dispatch(loadSearchResults(false));
  dispatch(searchMovies(data));
};

export const dispatchError = (dispatch, error) => {
  // console.log("disptach.js--------->", error);
  dispatch(loadSearchResults(false));
  // console.log("Error in dispatch.js", error);
  dispatch(appendError(error));
};
