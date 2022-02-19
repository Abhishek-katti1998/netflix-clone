function actionGenerate(actionType, actionPayLoad) {
  return {
    type: actionType,
    payLoad: actionPayLoad,
  };
}
export const appendGenre = (data) => actionGenerate("genre", data);
export const appendMovies = (data) => actionGenerate("movie", data);
export const searchMovies = (data) => actionGenerate("searchMovie", data);
export const loadSearchResults = (data) => actionGenerate("load", data);
export const appendSeries = (data) => actionGenerate("series", data);
export const appendSeriesGenre = (data) => actionGenerate("seriesGenre", data);
export const appendError = (data) => actionGenerate("error", data);
export const backDropState = (data) => actionGenerate("backdrop", data);
export const ModelState = (data) => actionGenerate("model", data);
export const clickedIndexState = (data) => actionGenerate("index", data);
export const vedioDetailState = (data) => actionGenerate("video", data);
export const playBtnClicked = (data) => actionGenerate("play", data);
