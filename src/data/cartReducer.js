import { data } from "./placeholderData";
import { ActionTypes } from "./Types";

// Cart State Structure
// const state = {
//   cart: [
//     { product: {}, qty: 3 },
//     { product: {}, qty: 1 },
//     { product: {}, qty: 2 },
//   ],
//   cartItems: 5,
//   cartPrice: 125.2,
// };

export const cartReducer = (state, action) => {
  let newState = { cart: [], cartItems: 0, cartPrice: 0, ...state };
  switch (action.type) {
    case ActionTypes.CART_ADD:
      const { product, qty } = action.payload;
      let existing = newState.cart.find(
        (item) => item.product.id === product.id
      );
      if (existing) {
        existing.qty += qty;
      } else {
        newState.cart = [...newState.cart, action.payload];
      }
      newState.cartItems += qty;
      newState.cartPrice += product.price * qty;

      localStorage.setItem("musicCart", JSON.stringify(newState));
      return newState;

    case ActionTypes.CART_UPDATE:
      newState.cart = newState.cart.map((item) => {
        if (item.product.id === action.payload.product.id) {
          const diff = action.payload.qty - item.product.qty;
          newState.cartItems += diff;
          newState.cartPrice += item.product.price * diff;
          return action.payload;
        } else {
          return item;
        }
      });

      localStorage.setItem("musicCart", JSON.stringify(newState));
      return newState;

    case ActionTypes.CART_REMOVE:
      let selection = newState.cart.find(
        (item) => item.product.id === action.payload.product.id
      );
      newState.cartItems -= selection.qty;
      newState.cartPrice -= selection.product.price * selection.qty;
      newState.cart = newState.cart.filter((item) => item !== selection);

      localStorage.setItem("musicCart", JSON.stringify(newState));
      return newState;

    case ActionTypes.CART_CLEAR:
      newState = { ...newState, cart: [], cartItems: 0, cartPrice: 0 };

      localStorage.setItem("musicCart", JSON.stringify(newState));
      return newState;

    default:
      return state || localStorage.getItem("musicCart")
        ? JSON.parse(localStorage.getItem("musicCart"))
        : data.cartData;
  }
};
