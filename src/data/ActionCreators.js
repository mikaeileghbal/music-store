import { ActionTypes, DataTypes } from "./Types";
import { data, data as phData } from "./placeholderData";

console.log(data);
export const loadData = (dataType) => ({
  type: ActionTypes.DATA_LOAD,
  payload: {
    dataType: dataType,
    data: phData[dataType],
  },
});

console.log(loadData(DataTypes.CATEGORIES));
