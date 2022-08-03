import { ActionTypes } from "./Types";
import { data } from "./placeholderData";
// const reducerTable = {
//   [ActionTypes.DATA_LOAD]: (state, action) => {
//     return {
//       ...state,
//       [action.payload.dataType]: action.payload.data,
//     };
//   },
// };

export const shopReducer = (state = data, action) => {
  // return reducerTable[action.payload.dataType]
  //   ? reducerTable[action.payload.dataType](state, action)
  //   : state || {};
  // console.log("reducer", ActionTypes.DATA_LOAD, action.dataType, action.data);
  switch (action.type) {
    case ActionTypes.DATA_LOAD:
      return {
        ...state,
        [action.payload.dataType]: action.payload.data,
      };
    default:
      return state || {};
  }
};
