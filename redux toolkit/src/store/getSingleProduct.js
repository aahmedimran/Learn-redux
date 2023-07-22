import { createSlice,createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";

export const getSingleproduct = createAsyncThunk("users/single", async (id) => {
  try {
    const postid = id
    const response = await axios.get(`http://localhost:3000/users/${id}`);
    // return response.data
    return { data: response.data, postid };
  
    
  } catch (error) { console.log(error, 'error') }
})


export const getSingleproductSlice = createSlice({
  name: "getSingleproduct",
  initialState: {
    id:'',
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getSingleproduct.pending, (state) => {
      state.isLoading = true
    });
    builder.addCase(getSingleproduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.id = action.payload.postid;
      state.error = '';
    });
    builder.addCase(getSingleproduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

const { reducer } = getSingleproduct;
export default reducer;