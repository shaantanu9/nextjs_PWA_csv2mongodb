import { combineReducers } from "redux";
import paginationReducer from "./pagination.reducer";
const rootReducer = combineReducers({
  //reducer
  paginationReducer,
});

export default rootReducer;
