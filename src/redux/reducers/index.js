import userReducer from "./user";
import photoReducer from "./photo";
import { combineReducers } from "redux";

const AppReducer = combineReducers({
  userReducer,
  photoReducer,
});

export default AppReducer;
