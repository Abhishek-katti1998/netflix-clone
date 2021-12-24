import { createStore } from "redux";
import rootReducer from "../reducer/rootreducer";
const store = createStore(rootReducer);
export default store;
