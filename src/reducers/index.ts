import { combineReducers } from "redux";
import makes from "./makeReducer";
import model from "./modelReducer";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
  makes,
  model,
  routing: routerReducer,
});

export default rootReducer;
