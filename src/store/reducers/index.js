const initialState = {
  input: "",
  error: "",
  result: []
}

const appReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  console.log("action yang dilakukan", action);
  switch (action.type) {
  
    case "ADD_ITEM":
      return {
        ...state,
        input: "",
        error: "",
        result: [...state.result, action.payload]
      };
      default: 
      return state
  }
}

export default appReducer;