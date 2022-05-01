import ActionType from "./actionTypes";

export default function album(state, action) {
  switch (action.type) {
    case ActionType.ADD_ALBUM:
      return state;
    default:
      return state;
  }
}
