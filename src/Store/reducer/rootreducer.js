import { combineReducers } from "redux";
import { genReducer, movieReducer } from "./reducer";
const rootReducer = combineReducers({
  gen: genReducer,
  movie: movieReducer,
});
export default rootReducer;
