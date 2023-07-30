import { ADDED } from "./actionTypes";
import { initialState } from "./initialState";

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
        
      break;

    default:
      return state;
  }
};
