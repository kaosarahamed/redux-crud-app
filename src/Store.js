import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./fetaures/BookSlice";

const store = configureStore({
  reducer: {
    booksReducer: booksReducer,
  },
});

export default store;
