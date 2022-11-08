import { combineReducers } from "redux";
import { shopReducer } from "./shopReducer";
import stateReducer from "./stateReducer";

export default function rootReducer() {
  return combineReducers({
    modelData: shopReducer,
    stateData: stateReducer,
  });
}
