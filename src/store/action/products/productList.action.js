import { addProduct } from "../../../services";

// export const addItem = (input) => async (dispatch, getState) => {
//   dispatch({
//     type: "ADD_ITEM",
//   });
//   try {
//     const url = "https://reqres.in/api/users";
//     const response = await fetch(url, {
//       method: "POST",
//       body: JSON.stringify({
//         name: input,
//         job: "leader",
//       }),
//     });
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }
//     dispatch({
//       type: "ADD_ITEM_SUCCESS",
//       payload: input,
//     });
//   } catch (error) {
//     dispatch({
//       type: "ADD_ITEM_FAILED",
//       payload: "Terjadi kesalahan",
//     });
//   }
// };


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
