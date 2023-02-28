import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const intialBooks = {
  books: [
    { id: uuidv4(), title: "Spidarmen Book", author: "kaosar ahamed" },
    { id: uuidv4(), title: "Avanger Book", author: "Tanvir ahamed" },
    { id: uuidv4(), title: "Avatar Book", author: "Jony" },
    { id: uuidv4(), title: "Mugli Book", author: "Mugli Sour" },
    { id: uuidv4(), title: "Jungle Book", author: "Jungle" },
    { id: uuidv4(), title: "Cat Book", author: "cat" },
    { id: uuidv4(), title: "dog Book", author: "dog" },
  ],
};

export const bookSlice = createSlice({
  name: "Book Libary",
  initialState: intialBooks,
  reducers: {
    showBooks: (state) => state,
    addBooks: (state, action) => {
      state.books.push(action.payload);
    },
    updateBooks: (state, action) => {
      const { id, title, author } = action.payload;
      const isBook = state.books.filter((book) => book.id === id);
      if (isBook) {
        isBook[0].title = title;
        isBook[0].author = author;
      }
    },
    deletBooks: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { showBooks, addBooks, deletBooks, updateBooks } =
  bookSlice.actions;
export default bookSlice.reducer;
