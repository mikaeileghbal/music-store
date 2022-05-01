import { createStore, combineReducers } from "redux";
import { album } from "./reducers";

const store = createStore(combineReducers({ album }));

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
