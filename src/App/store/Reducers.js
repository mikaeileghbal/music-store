import ActionType from "./Actions";

export default function AlbumReducer(state, action) {
  switch (action.type) {
    case ActionType.ADD_ALBUM:
      return state;
    default:
      return state;
  }
}
