import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addproduct = createAsyncThunk("users/create", async ({ name, uni }) => {
  try {
    const response = await axios.post("http://localhost:3000/users", {
      Name: name,
      Universty: uni,
      id: new Date().getTime()
    });
    return response.data
  } catch (error) { console.log(error, 'error') }
})


export const addProductSlice = createSlice({
  name: "addProduct",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(addproduct.pending, (state) => {
      state.isLoading = true
    });
    builder.addCase(addproduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(addproduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

const { reducer } = addProductSlice;
export default reducer;