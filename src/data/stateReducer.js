import { data } from "./placeholderData";
import { ActionTypes } from "./Types";

export default function stateReducer(state, action) {
  switch (action.type) {
    case ActionTypes.SET_CART_NOTIFY_DISPLAY:
      return { ...state, showCartNotify: action.payload };

    default:
      return state || data.stateData;
  }
}
