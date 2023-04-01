import { createSlice,createAsyncThunk  } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await myApi.getData();
    return response.data;
  });




export const getProductSlice = createSlice({
  name: "getProduct",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    product: (state, action) => {




    },
  },
});
