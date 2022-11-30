import { ActionTypes, DataTypes } from "./Types";
import { data as phData } from "./placeholderData";

export const loadData = (dataType) => ({
  type: ActionTypes.DATA_LOAD,
  payload: {
    dataType: dataType,
    data: phData.modelData[dataType],
  },
});

export const addToCart = (product, qty) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      product,
      qty,
    },
  };
};
