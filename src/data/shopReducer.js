import { ActionTypes } from "./types";

const reducerTable = {
  [ActionTypes.DATA_LOAD]: (state, action) => {
    return {
      ...state,
      [action.payload.dataType]: action.payload.data,
    };
  },
};

export const shopReducer = (state, action) => {
  reducerTable[action.payload.dataType]
    ? reducerTable[action.payload.dataType](state, action)
    : state;
};
