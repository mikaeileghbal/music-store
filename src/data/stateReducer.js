import { data } from "./placeholderData";
import { ActionTypes } from "./Types";

export default function stateReducer(state, action) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      const { product, qty } = action.payload;
      console.log("product in reducer , qty: ", product);
      console.log("qty: ", qty);
      const subtotal = product.price * qty;

      const newState = {
        ...state,
        cart: {
          ...state.cart,
          products: [...state.cart.products, product],
        },
      };
      console.log(newState);
      return newState;

    case ActionTypes.REMOVE_FROM_CART:
      return state || data.stateData;

    default:
      return state || data.stateData;
  }
}
