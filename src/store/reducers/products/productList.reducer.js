import { ADD_ITEM } from "../../action.types";

const initialState = {
  input: "",
  error: "",
  isLoading: false,
  result: [],
};

const productList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM+'/pending':
      return {
        ...state,
        input: "",
        error: "",
        isLoading: true,
      };
    case ADD_ITEM+'/fulfilled':
      return {
        ...state,
        result: [...state.result, action.payload.name],
        isLoading: false,
      };

    case ADD_ITEM+'/rejected':
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
