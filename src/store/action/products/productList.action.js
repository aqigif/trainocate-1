export const addItem = (input) => (dispatch, getState) => {
  dispatch({
    type: 'ADD_ITEM',
  })
  try {
    setTimeout(() => {
      dispatch({
        type: 'ADD_ITEM_SUCCESS',
        payload: input
      })
    }, 3000);
  } catch (error) {
    dispatch({
      type: 'ADD_ITEM_FAILED',
      payload: 'Terjadi kesalahan'
    })
  }
  console.log(getState())
}