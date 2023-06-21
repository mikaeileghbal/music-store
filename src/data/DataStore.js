import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { logger } from "redux-logger";

export const shopDataStore = createStore(
  rootReducer(),
  applyMiddleware(logger)
);
