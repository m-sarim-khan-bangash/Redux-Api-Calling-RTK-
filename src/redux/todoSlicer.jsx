import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
});

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    data: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export default todoSlice.reducer;
