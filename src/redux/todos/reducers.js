import {
  ADDED,
  ALLCOMPLATED,
  CLEARCOMPLATED,
  COLORSELECTED,
  DELETED,
  TOGGLED,
} from "./actionTypes";
import { initialState } from "./initialState";

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
        },
      ];

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return state;
        } else {
          return {
            ...todo,
            complated: !todo.complated,
          };
        }
      });

    case COLORSELECTED:
      const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return state;
        } else {
          return {
            ...todo,
            color: color,
          };
        }
      });

    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    case ALLCOMPLATED:
      return state.map((todo) => {
        return {
          ...todo,
          complated: true,
        };
      });

    case CLEARCOMPLATED:
      return state.filter((todo) => !todo.complated);

    default:
      return state;
  }
};

export default reducers;
