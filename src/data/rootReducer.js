import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { shopReducer } from "./shopReducer";
import stateReducer from "./stateReducer";

export default function rootReducer() {
  return combineReducers({
    modelData: shopReducer,
    stateData: stateReducer,
    cartData: cartReducer,
  });
}
