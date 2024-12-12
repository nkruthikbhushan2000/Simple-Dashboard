import { createStore } from "redux";
import AppReducer from "./Reducer";

const store = createStore(AppReducer);

export default store;