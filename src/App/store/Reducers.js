import ActionType from "./actionTypes";

const albumTable = {
  ADD_ALBUM: function (state, action) {
    return state.album;
  },
};

export default function album(state, action) {
  return albumTable[action.type]
    ? albumTable[action.type](state, action)
    : state;
}
