import { createStore } from "redux";
import rootReducer from "./rootReducer";

export const shopDataStore = createStore(rootReducer());
