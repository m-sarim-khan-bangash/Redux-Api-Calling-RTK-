import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    console.log(response);
    return response.json();
});

export const productSlice = createSlice({
    name: "product",
    initialState: {
        isLoading: false,
        data: [],
        error: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
            state.error = false;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        });
    },
});

export default productSlice.reducer;

