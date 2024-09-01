import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlicer";
import productReducer from "./productSlicer";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    product: productReducer,
  },
});

export default store;
