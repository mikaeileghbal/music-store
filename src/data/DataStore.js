import { createStore } from "redux";
import { shopReducer } from "./shopReducer";

export const shopDataStore = createStore(shopReducer);
