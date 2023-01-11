import { ActionTypes } from "./Types";

export const showCartNotify = () => {
  return {
    type: ActionTypes.SET_CART_NOTIFY_DISPLAY,
    payload: true,
  };
};

export const closeCartNotify = () => {
  return {
    type: ActionTypes.SET_CART_NOTIFY_DISPLAY,
    payload: false,
  };
};
