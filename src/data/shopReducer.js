import { ActionTypes } from "./Types";
import { data } from "./placeholderData";

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.DATA_LOAD:
      return {
        ...state,
        [action.payload.dataType]: action.payload.data,
      };

    default:
      return state || data.modelData;
  }
};
