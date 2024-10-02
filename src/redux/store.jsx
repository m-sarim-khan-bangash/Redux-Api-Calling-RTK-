import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlicer";
import productReducer from "./productSlicer";
import { productsApi } from "../features/apiSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    product: productReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
