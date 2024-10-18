import { ADD_ITEM, ADD_ITEM_FAILED, ADD_ITEM_SUCCESS } from "../../action.types";

const initialState = {
  input: "",
  error: "",
  isLoading: false,
  result: [],
};

const productList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        input: "",
        error: "",
        isLoading: true,
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        result: [...state.result, action.payload],
        isLoading: false,
      };

    case ADD_ITEM_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default productList;
