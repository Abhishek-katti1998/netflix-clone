import { combineReducers } from "redux";
import {
  genReducer,
  movieReducer,
  searchMovieReducer,
  loadSearchResultsReducer,
  SeriesgenReducer,
  seriesReducer,
} from "./reducer";
const rootReducer = combineReducers({
  gen: genReducer,
  movie: movieReducer,
  search: searchMovieReducer,
  loadSearchResults: loadSearchResultsReducer,
  seriesGen: SeriesgenReducer,
  series: seriesReducer,
});
export default rootReducer;
