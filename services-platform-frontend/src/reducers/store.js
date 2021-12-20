import { createStore, combineReducers } from "redux";
import userReducer from "./user/reducer";

const reducer = combineReducers({userReducer});
const store = createStore(reducer);

export default store;