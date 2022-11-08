import { data } from "./placeholderData";

export default function stateReducer(state, action) {
  switch (action.type) {
    default:
      console.log(data);
      return state || data.stateData;
  }
}
