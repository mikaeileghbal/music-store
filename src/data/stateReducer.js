import { data } from "./placeholderData";

export default function stateReducer(state, action) {
  switch (action.type) {
    default:
      return state || data.stateData;
  }
}
