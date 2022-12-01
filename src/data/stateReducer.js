import { data } from "./placeholderData";
import { ActionTypes } from "./Types";

export default function stateReducer(state, action) {
  switch (action.type) {
    default:
      return state || data.stateData;
  }
}
