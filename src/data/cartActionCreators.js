import { ActionTypes } from "./Types";

export const addToCart = (product, qty) => {
  return {
    type: ActionTypes.CART_ADD,
    payload: {
      product,
      qty: qty || 1,
    },
  };
};

export const updateCartQty = (product, qty) => {
  return {
    type: ActionTypes.CART_UPDATE,
    payload: { product, qty },
  };
};

export const removeFromCart = (product) => {
  return {
    type: ActionTypes.CART_REMOVE,
    payload: {
      product,
    },
  };
};

export const clearCart = () => {
  return {
    type: ActionTypes.CART_CLEAR,
  };
};
