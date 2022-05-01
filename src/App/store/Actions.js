import actionType from "./ActionTypes";

export const addNewAlbum = (title) => ({
  type: actionType.ADD_ALBUM,
  title,
});
