import { combineReducers } from "redux";

import persist from "./persist";
import home from "./home";
import placeholder from "./placeholder";

export default combineReducers({
  persist,
  home,
  placeholder,
});
