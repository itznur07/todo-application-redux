import { combineReducers } from "redux";
import filterReducer from "../redux/filters/reducer";
import todoReducer from "../redux/todos/reducers";

const rootReducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});

export default rootReducer;
