import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-Fi",
  },
];

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.unshift(action.payload); // new book top e
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;