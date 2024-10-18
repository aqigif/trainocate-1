import { addProduct } from "../../../services";

export const addItem = (input) => async (dispatch, getState) => {
  dispatch({
    type: "ADD_ITEM",
  });
  try {
    await addProduct({
      name: input,
      job: "leader",
    });
    dispatch({
      type: "ADD_ITEM_SUCCESS",
      payload: input,
    });
  } catch (error) {
    dispatch({
      type: "ADD_ITEM_FAILED",
      payload: "Terjadi kesalahan",
    });
  }
};
