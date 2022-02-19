import { combineReducers } from "redux";
import {
  genReducer,
  movieReducer,
  searchMovieReducer,
  loadSearchResultsReducer,
  SeriesgenReducer,
  seriesReducer,
  errorReducer,
  backDropReducer,
  ModelReducer,
  renderReducer,
  vedioReducer,
  playBtnReducer,
} from "./reducer";
const rootReducer = combineReducers({
  gen: genReducer,
  movie: movieReducer,
  search: searchMovieReducer,
  loadSearchResults: loadSearchResultsReducer,
  seriesGen: SeriesgenReducer,
  series: seriesReducer,
  error: errorReducer,
  backdrop: backDropReducer,
  model: ModelReducer,
  render: renderReducer,
  video: vedioReducer,
  play: playBtnReducer,
});
export default rootReducer;
