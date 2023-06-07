import count from "./count";
import { combineReducers } from "redux";
import persons from "./person";
export default combineReducers({
  count,
  persons,
});
