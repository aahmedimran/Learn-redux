import { createSlice,createAsyncThunk  } from "@reduxjs/toolkit";

  export const fetchData = createAsyncThunk("products/fetch", async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const products = await data.json();
    return products;
  });

export const getProductSlice = createSlice({
  name: "getProduct",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

const { reducer } = getProductSlice;
export default reducer;