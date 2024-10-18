import { createAsyncThunk } from "@reduxjs/toolkit";
import { addProduct } from "../../../services";
import { ADD_ITEM } from "../../action.types";


export const addItem = createAsyncThunk(ADD_ITEM, async (thunkAPI) => {
  try {
    const res =  await addProduct({
      name: 'input',
      job: "leader",
    });
    return res.data
  } catch (err) {
    return thunkAPI.rejectWithValue({ error: err.message })
  }
})
