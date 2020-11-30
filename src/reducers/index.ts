import { combineReducers } from "redux";
import todoList from "./todo";
import currentFilter from "./currentFilter";

export default combineReducers({
  todoList,
  currentFilter,
});
